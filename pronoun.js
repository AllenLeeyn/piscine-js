const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

const pronoun = (str) => {
    const obj = {};
    const words = str.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (pronouns.includes(word)){
            if (!obj[word]){
                obj[word] = { word :[], count: 1};
            } else {
                obj[word].count++;
            }
            if (!pronouns.includes(words[i+1])) obj[word].word.push(words[i+1]);
        }
    }
    return obj;
};
