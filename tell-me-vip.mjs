import fs from 'fs/promises';
import path from 'path';

let arg = process.argv[2];

if (!arg) arg = '.';

let files;
try {
    files = await fs.readdir(`${arg}`, { encoding: 'utf8' });
} catch (err) {
    console.error(err.message);
};

const names = [];
for (const file of files){
    const filePath = path.join(arg, file)
    let content = await fs.readFile(filePath, 'utf8');
    content = JSON.parse(content);
    if (content.answer !== 'yes') continue;
    
    const name = file.replaceAll('.json', '').split('_');
    names.push(`${name[1]} ${name[0]}`);
};

names.sort();

for (let i = 0; i < names.length; i++){
    names[i] = `${i+1}. ${names[i]}`;
};

try {
    const data = new Uint8Array(Buffer.from(names.join('\n')));
    const promise = fs.writeFile('vip.txt', data);
  
    await promise;
  } catch (err) {
    console.error(err);
  }