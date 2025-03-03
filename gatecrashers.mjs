import http from 'http';
import fs from 'fs/promises';

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
        return;
    };

    let resCode = 201;
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        try {
            await fs.mkdir('./guests', { recursive: true });
            body = JSON.stringify(JSON.parse(body));

            const data = new Uint8Array(Buffer.from(body));
            const promise = fs.writeFile(`./guests${req.url}.json`, data);
            await promise;
        } catch (error) {
            resCode = 500;
            body = JSON.stringify({ error: 'server failed'});
        }
        res.writeHead(resCode, { 'Content-Type': 'application/json'});
        res.end(body);
    });
};

server.on('request', async (req, res) =>{
    if (req.method === 'POST') {
        await postMethod(req, res);
    };
});

server.listen(5000);
console.log('Listening on port 5000');