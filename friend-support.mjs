import http from 'http';
import path from 'path';
import fs from 'fs/promises';

const server =  http.createServer((req, res) =>{
});

server.on('request', async (req, res) =>{
    const filePath = path.join('./guests', `${req.url}.json`)
    console.log(filePath)
    let resCode = 200;
    let content;
    try {
        content = await fs.readFile(filePath, 'utf8');
        console.log(content)
    } catch (error) {
        if (error.code === 'ENOENT') {
            resCode = 404;
            content = JSON.stringify({ error: 'guest not found'});
        } else {
            resCode = 500;
            content = JSON.stringify({ error: 'server failed'});
        }
    }
    res.writeHead(resCode, { 'Content-Type': 'application/json'});
    res.end(content);
});

server.listen(5000);
console.log('Listening on port 5000');