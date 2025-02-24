const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

const pronoun = (str) => {
    const obj = {};
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let tgt = obj[word]
        if (pronouns.includes(word)){
            if (!tgt){
                tgt = { word :[], count: 1};
            } else {
                tgt.count++;
            }
            if (!pronouns.includes(words[i+1])) tgt.word.push(words[i+1]);
        }
    }
    return obj;
};
