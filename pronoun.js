const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

const pronoun = (str) => {
    const obj = {};
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])){
            if (!obj[words[i]]){
                obj[words[i]] = { word :[], count: 1};
            } else {
                obj[words[i]].count++;
            }
            if (!pronouns.includes(words[i+1])) obj[words[i]].word.push(words[i+1]);
        }
    }
    return obj;
};
