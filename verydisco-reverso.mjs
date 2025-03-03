import fs from 'fs/promises'

const arg = process.argv[2];

async function logFile(arg) {
  try {
    const contents = await fs.readFile(`${arg}`, { encoding: 'utf8' });
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}
let words = await logFile(arg);

const disco = word => {
    const sliceLen = Math.round(word.length/2);
    const part1 = word.slice(0,sliceLen);
    const part2 = word.slice(sliceLen, word.length);
    return `${part2}${part1}`;
};

words = words.split(' ');
words.forEach((word, i) => {words[i]=disco(word)});

console.log(words.join(' '));