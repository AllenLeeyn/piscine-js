import fs from 'fs/promises'

let arg = process.argv[2];

if (!arg) arg = '.';

let files;
try {
files = await fs.readdir(`${arg}`, { encoding: 'utf8' });
} catch (err) {
console.error(err.message);
}

files = files.sort();
let i = 1;
for (const file of files){
    const name = file.replaceAll('.json', '').split('_');
    console.log(`${i}. ${name[1]} ${name[0]}`);
    i++;
}