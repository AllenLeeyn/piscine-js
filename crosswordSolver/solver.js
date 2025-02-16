// printGridLn() return a line of the grid as a string
const printGridLn = (line) => {
    let result = '';
    for (const square of line){
        result = result + square.char;
    };
    return result;
};

// printGrid() returns the whole grid as a string
const printGrid = (grid) =>{
    let result = printGridLn(grid[0]);
    for (let i = 1; i < grid.length; i++){
        result = result + '\n' + printGridLn(grid[i]);
    };
    return result;
};

// getWord() that is in the blankWord array
const getWord = (blankWord) => {
    let word = '';
    for (let i = 0; i < blankWord.length; i++){
        word = word + blankWord[i].char;
    }
    return word
};

// setWord() into the blankWord array 
const setWord = (blankWord, word) => {
    for (let i = 0; i < blankWord.length; i++){
        blankWord[i].char = word[i];
    }
};

// insertWord() insert a word into a blankWord. returns false if there is a clash.
const isWordInsertable = (blankWord, word) =>{
    for (let i = 0; i < word.length; i++){
        if (!(blankWord[i].char === ' ' || blankWord[i].char === word[i])){
            return false;
        };
    };
    return true;
};

// isSolved() chackes if all the words are used
const isSolved = (wordList) => {
    for (const word of wordList){
        if (!word.isUsed) return false;
    };
    return true;
};

// solveGrid() use back tracking recursive to insert words into the blankList.
// tries all possibilities to ensure solution found is unique
export const solveGrid = (blankList, wordList, wrdLstInd, answer, grid) => {
/*     console.log("newcycle")
    for (const blankWord of blankList){
        let word = '';
        for (const sqr of blankWord){
            word = word + sqr.char;
        };
        console.log(word );
    };
    console.log(printGrid(grid)) */
    for (let wrdInd = wrdLstInd; wrdInd < wordList.length; wrdInd++){
        for (let blankInd = 0; blankInd < blankList.length; blankInd++){
            if (blankList[blankInd].length === wordList[wrdInd].word.length && !wordList[wrdInd].isUsed){

                const oldWord = getWord(blankList[blankInd]);
                if (isWordInsertable(blankList[blankInd], wordList[wrdInd].word)){
                    setWord(blankList[blankInd], wordList[wrdInd].word);
                    wordList[wrdInd].isUsed = true;
                    if (isSolved(wordList)) {
                        if (answer === '') {
                            answer = printGrid(grid)
                        } else return 'Error: no unique solution';
                    }
                    answer = solveGrid(blankList, wordList, wrdInd+1, answer, grid);
                };

                setWord(blankList[blankInd], oldWord);
                wordList[wrdInd].isUsed = false;
            };
            if (blankList[blankInd].length < wordList[wrdInd].word.length) return answer;
        };
    };
    return answer;
};