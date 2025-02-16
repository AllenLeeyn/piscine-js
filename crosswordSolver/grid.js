// checkPuzzle() if each char is a '.', 0, 1 or 2.
// return height, width and wordCount for checking
export const checkPuzzle = (puzzle) => {
    const qry = /\.|[0-2]/;
    const puzzleLines = puzzle.split('\n');
    const height = puzzleLines.length;
    const width = puzzleLines[0].length;
    let wordCount = 0;

    for (const line of puzzleLines){
        if (line === '') return null;
        for (const char of line){
            if (!qry.test(char)){
                return null;
            };
            wordCount = (/^[1-2]$/.test(char)) ? wordCount + Number(char): wordCount;
        };
    };
    return {height: height, width: width, wordCount: wordCount};
};

// makeGrid() makes a grid that represent the puzzle board
export const makeGrid = (puzzle) => {
    const puzzleLines = puzzle.split('\n');
    const grid = [];
    for (const line of puzzleLines){
        const squares = [];
        for (const char of line){
            if (/^[0-2]$/.test(char)) {
                squares.push({char:' ', count: Number(char)});
            } else {
                squares.push({char:'.', count: -1});
            };
        };
        grid.push(squares);
    };
    return grid;
};

// isGridOk() checks if number of words starting from a square is correct
export const isGridOk = (grid) => {
    for (let y = 0; y < grid.length; y++){
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x].count > 0){
                let curCount = 0;
                if ((x+1) < grid[y].length && grid[y][x+1].count >= 0){
                    (x > 0 && grid[y][x-1].count >= 0) ? curCount--: null;
                    curCount++;
                }
                if ((y+1) < grid.length && grid[y+1][x].count >= 0){
                    (y > 0 && grid[y-1][x].count >= 0) ? curCount--: null;
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

// getBlankWordX() gets a blank word horizontally
const getBlankWordX = (grid, y, x) => {
    const blankWord = [];
    for (let curX = x; curX < grid[y].length; curX++){
        if (grid[y][curX].count >= 0){
            blankWord.push(grid[y][curX]);
        } else {
            break;
        };
    };
    return blankWord;
};

// getBlankWordY() gets a blank word vertically
const getBlankWordY = (grid, y, x) => {
    const blankWord = [];
    for (let curY = y; curY < grid.length; curY++){
        if (grid[curY][x].count >= 0){
            blankWord.push(grid[curY][x]);
        } else {
            break;
        };
    };
    return blankWord;
};

// makeBlankList() makes a list of blank words from the grid
export const makeBlankList = (grid) => {
    const blankList = [];
    for (let y = 0; y < grid.length; y++){
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x].count > 0){
                if ((x+1) < grid[y].length && grid[y][x+1].char === ' '){
                    if (x === 0 || (x > 0 && grid[y][x-1].char === '.')) {
                        blankList.push(getBlankWordX(grid, y, x))
                    };
                };
                if ((y+1) < grid.length && grid[y+1][x].count >= 0) {
                    if (y === 0 || (y > 0 && grid[y-1][x].count === -1)) {
                        blankList.push(getBlankWordY(grid, y, x))
                    };
                };

            };
        };
    };
    blankList.sort((a, b) => b.length - a.length);
    return blankList;
};
