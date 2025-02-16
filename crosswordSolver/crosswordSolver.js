import {checkPuzzle, makeGrid,isGridOk, makeBlankList} from './grid.js'
import {checkWordList} from './word.js'
import {solveGrid} from './solver.js'

// crosswordSolver() main function to solve crossword
export const crosswordSolver = (puzzle, wordList) => {
    if (!(typeof puzzle === 'string') || !Array.isArray(wordList)){
        console.log('Error: incorrect data type');
        return;
    }

    const puzzleParams = checkPuzzle(puzzle);
    if (puzzleParams === null || puzzleParams.wordCount !== wordList.length){
        console.log('Error: puzzle format incorrect');
        return;
    };
    const grid = makeGrid(puzzle);
    if (grid.length === 0 || !isGridOk(grid)){
        console.log('Error: incorrect word count in square');
        return;
    };
    const blankList = makeBlankList(grid);

    const longestLength = checkWordList(wordList);
    const longestSide = (puzzleParams.height > puzzleParams.width) ? puzzleParams.height : puzzleParams.width;
    if (longestLength === null || (longestLength > longestSide)){
        console.log('Error: word list not valid');
        return;
    };
    const newWordList = [];
    for (let i = 0; i < wordList.length; i++){
        newWordList.push({word: wordList[i], isUsed: false});
    };

    const answer = solveGrid(blankList, newWordList, 0, '', grid);
    console.log((answer === '') ? 'Error: no solution found': answer);
};
