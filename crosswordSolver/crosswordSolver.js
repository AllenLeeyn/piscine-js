const checkPuzzle = (puzzle) => {
    const qry = /.|[0-4]/;
    const puzzleLines = puzzle.split('\n');
    const height = puzzleLines.length;
    const width = puzzleLines[0].length;
    let wordCount = 0;

    for (const line of puzzleLines){
        for (const char of line){
            if (!qry.test(char)){
                return null;
            };
            wordCount = (/^[1-4]$/.test(char)) ? wordCount + Number(char): wordCount;
        };
    };
    return {height: height, width: width, wordCount: wordCount};
};

const checkWordList = (wordList) => {
    let longest = 0;
    for (const word of wordList){
        if (word.length < 2){
            return null;
        };
        longest = (word.length > longest) ? word.length: longest;
        for (const char of word){
            if (!/[a-zA-Z]/.test(char)){
                return null;
            };
        };
    };
    return longest;
};

const makeGrid= (puzzle) => {
    const puzzleLines = puzzle.split('\n');
    const grid = [];
    for (const line of puzzleLines){
        const squares = [];
        for (const char of line){
            if (/^[0-4]$/.test(char)){
                squares.push({char: ' ', count: Number(char)});
            } else {
                squares.push({char: '.', count: -1});
            };
        };
        grid.push(squares);
    };

    return grid;
};

const isGridOk = (grid) => {
    for (let y = 0; y < grid.length; y++){
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x].count > 0){
                let curCount = 0;
                if ((x+1) < grid[y].length && grid[y][x+1].count >= 0){
                    if ((x-1) > 0 && grid[y][x-1].count >= 0){
                        curCount--;
                    }
                    curCount++;
                }
                if ((y+1) < grid.length && grid[y+1][x].count >= 0){
                    if ((y-1) > 0 && grid[y-1][x].count >= 0){
                        curCount--;
                    }
                    curCount++;
                }
                if (grid[y][x].count !== curCount){
                    return false;
                };
            };
        };
    };
    return true;
};

const printGridLn = (line) => {
    let result = '';
    for (const square of line){
        result = result + square.char;
    };
    return result;
};

const printGrid = (grid) =>{
    let result = printGridLn(grid[0]);
    for (let i = 1; i < grid.length; i++){
        result = result + '\n' + printGridLn(grid[i]);
    };
    return result;
};
const solveGrid = (grid, wordList) => {

};

const crosswordSolver = (puzzle, wordList) => {
    if (!(typeof puzzle === 'string') || !Array.isArray(wordList)){
        return 'Error';
    }
    const puzzleParams = checkPuzzle(puzzle);
    if (puzzleParams === null || puzzleParams.wordCount !== wordList.length){
        return 'Error';
    };
    const longestLength = checkWordList(wordList);
    if (longestLength === null){
        return 'Error';
    };
    const grid = makeGrid(puzzle);
    if (grid.length === 0 || !isGridOk(grid)){
        return 'Error1';
    };
    return printGrid(grid);
};

const emptyPuzzle = `2001
0..0
1000
0..0`
const words1 = ['casa', 'alan', 'ciao', 'anta']

const puzzle = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`
const words2 = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
].reverse()

console.log(crosswordSolver(puzzle,words2));