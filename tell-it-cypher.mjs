import fs from 'fs/promises';

const file = process.argv[2];
const keyword = process.argv[3];
let writefile = process.argv[4];

let result;

if (keyword === 'encode') {
    writefile = (!writefile) ? 'cypher.txt' : writefile;
    const content = await fs.readFile(file);
    result = content.toString('base64');
}
if (keyword === 'decode') {
    writefile = (!writefile) ? 'clear.txt' : writefile;
    const content = await fs.readFile(file, 'utf-8');
    result = Buffer.from(content, 'base64');
}

try {
    const data = new Uint8Array(Buffer.from(result));
    const promise = fs.writeFile(writefile, data);
  
    await promise;
} catch (err) {
    console.error(err);
}