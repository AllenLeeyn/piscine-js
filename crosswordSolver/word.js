// checkWordList() to check if there are repeated words and 
// if all word are alphabetical only.
export const checkWordList = (wordList) => {
    wordList.sort((a, b) => b.length - a.length);
    let longest = wordList[0].length;

    const wordSet = new Set(wordList)
    if (wordList.length !== wordSet.size){
        return null;
    };
    for (const word of wordList){
        if (word.length < 2){
            return null;
        };
        for (const char of word){
            if (!/[a-zA-Z]/.test(char)){
                return null;
            };
        };
    };
    return longest;
};