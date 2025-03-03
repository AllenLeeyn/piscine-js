import fs from 'fs/promises';

const file = process.argv[2];
const keyword = process.argv[3];

const content = await fs.readFile(file, 'utf8');
const lines = content.split("\n");

let writeFile;
const results = [];
for (const line of lines){
    let result ;
    if (keyword === 'encode') {
        writeFile = 'cypher.txt';
        result = Buffer.from(line, 'utf-8')
        result = result.toString('base64');
        results.push(result)
    }
    if (keyword === 'decode') {
        writeFile = 'clear.txt';
        result = Buffer.from(line, 'base64')
        result = result.toString('utf-8');
        results.push(result)
    }

};
try {
    const data = new Uint8Array(Buffer.from(results.join('\n')));
    const promise = fs.writeFile(writeFile, data);
  
    await promise;
} catch (err) {
    console.error(err);
}