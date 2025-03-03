import fs from 'fs/promises'

const getContent = async fileName => {
    const content = await fs.readFile(fileName, 'utf8');
    return `${content} is my content;`
}

console.log(await getContent('min-max.js'))