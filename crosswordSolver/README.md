# Crossword Solver

Our **crosswordSolver** solves a crossword puzzle with a given list of words.


## Description
The solver takes 2 arguments. One `puzzle` string and one `wordList` array.
It uses a brack tracking recursive function to find solutions.
If the given puzzle has more than one solution (no unique solution), the program will return an error.


## Installation

To get started with the crossword solver, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://01.gritlab.ax/git/shussain/crossword
    ```

2. Navigate to the project directory:
    ```bash
    cd crossword-solver
    ```

3. Install the dependencies (if there are any):
    ```bash
    npm install
    ```

4. Alternatively, you can run it directly if it's a JavaScript file using `node`:
    ```bash
    node crosswordSolver.js
    ```

## Usage

To use the crossword solver, you need to go into crosswordSolver.js and provide the `puzzle` string and `words` array. See the example below:
````
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words)
````

Output:
````
casa
i..l
anta
o..n
````

`puzzle` string format: '.' represents a black space on the puzzle board. A number represents a blank space on a puzzle board. The number also tells the program the number of words starting from that square.

`words` array: an array of alphabetical string.

## Technologies

- **JavaScript**: The core language used to implement the crossword solver.
- **Node.js**: If you're running it in a server-side environment.

---

### glossary
puzzle:       the puzzle string given

wordList:     the array of words given

word:         an alphabetical string of at least 2 char long

grid:         a 2 dimension array of a square object.

square:       an object with {char, count} to represent a square on the grid.
              count: the number of words that start from current square.

black square: no characters can be placed here.
              represented in the puzzle string as '.'. 
              the black sqaure object {char: '.', count: -1} is used to represent it.

blank square: characters can be placed here.
              represented in the puzzle strig as 0, 1 or 2.
              the number represents how many words start from this box.
              no square should have more than 2 words starting from it.
              we only consider words as placed left to right and up to down.
              the blank sqaure object {char: ' ', count: [0-2]} is used to represent it.

blankWord:   an array of blank squares where a word can be place horizontally or vertically.

blankList:   an array containing blankWords.

logic
---
1. checks if the given arguments are the correct data type
2. checks if the puzzle given is the correct format
3. make the grid to represent the given puzzle. below is an example:
```
[[{char: ' ', count: 2}, {char: ' ', count: 0}, {char: ' ', count: 0}, {char: ' ', count: 1}],
 [{char: ' ', count: 0}, {char: '.', count: -1}, {char: '.', count: -1}, {char: ' ', count: 0}],
 [{char: ' ', count: 1}, {char: ' ', count: 0}, {char: ' ', count: 0}, {char: ' ', count: 0}],
 [{char: ' ', count: 0}, {char: '.', count: -1}, {char: '.', count: -1}, {char: ' ', count: 0}]]
```
4. checks if the starting word count in the grid is ok
5. make a list of blank words. By using a pointer to refer to each square, we create a an array of square objects. This allow us to place a character in square[x] in blankWord[n] and the change will reflect in square[y] in blankWord[m]. Using this method, we can refer to the list instead of the actual grid, eliminating the need to check the grid. This also help us to word length for more efficient solution finding.
```
0: [[{char: ' ', count: 2}, {char: ' ', count: 0}, {char: ' ', count: 0}, {char: ' ', count: 1}], 
1:  [{char: ' ', count: 2}, {char: ' ', count: 0}, {char: ' ', count: 1}, {char: ' ', count: 0}],
2:  [{char: ' ', count: 1}, {char: ' ', count: 0}, {char: ' ', count: 0}, {char: ' ', count: 0}],
3:  [{char: ' ', count: 1}, {char: ' ', count: 0}, {char: ' ', count: 0}, {char: ' ', count: 0}]]
```
6. check if there are repeated word in wordList and if the longest word can fit into the puzzle
7. create a new word list array with object {word, isUsed} to help track if a word is used.
8. solveGrid by placing the longest word into the grid first. If a word fails to be placed, the next blank word. A word is only placed if the length matches.


