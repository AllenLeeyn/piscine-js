import fs from 'fs/promises'
import { Buffer } from 'node:buffer';

const arg = process.argv[2];

const disco = word => {
    const sliceLen = Math.round(word.length/2);
    const part1 = word.slice(0,sliceLen);
    const part2 = word.slice(sliceLen, word.length);
    return `${part2}${part1}`;
};

const words = arg.split(' ');
words.forEach((word, i) => {words[i]=disco(word)});


try {
  const data = new Uint8Array(Buffer.from(words.join(' ')));
  const promise = fs.writeFile('verydisco-forever.txt', data);

  await promise;
} catch (err) {
  console.error(err);
}