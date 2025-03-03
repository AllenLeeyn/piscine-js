import http from 'http';
import fs from 'fs/promises';

const server = http.createServer();

const postMethod = async (req, res) => {
    let resCode = 201;
    let body = '';
    
    const fileName = req.url.slice(1);

    req.on('data', chunk => {
        body += chunk;
    });
    
    req.on('end', async () => {
        try {
            const data = new Uint8Array(Buffer.from(body));
            const promise = fs.writeFile(`guests/${fileName}.json`, data);
            
            await promise;
        } catch (error) {
            console.log(error)
            resCode = 500;
            body = JSON.stringify({ error: 'server failed'});
        }
        res.writeHead(resCode, { 'Content-Type': 'application/json'});
        res.end(body);
    });
};

server.on('request', async (req, res) =>{
    let resCode = 201;
    let content;

    if (req.method === 'POST') {
        await postMethod(req, res);
    };
});

server.listen(5000);
console.log('Listening on port 5000');