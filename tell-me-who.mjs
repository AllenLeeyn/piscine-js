import fs from 'fs/promises'

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
    const name = file.replaceAll('.json', '').split('_');
    names.push(`${name[1]} ${name[0]}`);
};

names.sort();

for (let i = 0; i < names.length; i++){
    console.log(`${i+1}. ${names[i]}`);
};