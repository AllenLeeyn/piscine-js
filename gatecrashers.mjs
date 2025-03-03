import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = http.createServer();

const bestFriends = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const pw = 'abracadabra';

const isBestFriends = (req) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return false;

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');
    if (pw !== password || !bestFriends.includes(username)) return false;

    return true;
}

const postMethod = async (req, res) => {
    if (!isBestFriends(req)){
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end('Authorization Required');

        throw new Error('hehre');
        return;
    };

    let resCode = 200;
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        try {
            body = JSON.stringify(JSON.parse(body));
            const filePath = path.join(__dirname, 'guests', `${req.url}.json`);
            const data = new Uint8Array(Buffer.from(body));

            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, data);

            res.writeHead(resCode, { 'Content-Type': 'application/json'});
            res.end(body);
        } catch (error) {
            resCode = 500;
            body = JSON.stringify({ error: 'server failed'});

            res.writeHead(resCode, { 'Content-Type': 'application/json'});
            res.end(body);
        }
    });
};

server.on('request', async (req, res) =>{
    if (req.method === 'POST') {
        await postMethod(req, res);
    };
});

server.listen(5000);
console.log('Listening on port 5000');