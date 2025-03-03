import fs from 'fs/promises'

let arg = process.argv[2];

if (!arg) arg = '.';

let files;
try {
files = await fs.readdir(`${arg}`, { encoding: 'utf8' });
} catch (err) {
console.error(err.message);
}

console.log(files.length);