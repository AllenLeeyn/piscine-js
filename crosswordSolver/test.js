import {crosswordSolver} from './crosswordSolver.js'

console.log('example TEST case')
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']
crosswordSolver(emptyPuzzle, words)

// TEST empty puzzle
console.log('\nTEST empty puzzle')
let testPuzzle = ''
let testWords = ['java']
crosswordSolver(testPuzzle, testWords)

// TEST empty words
console.log('\nTEST empty words')
testPuzzle = '1000'
testWords = ['']
crosswordSolver(testPuzzle, testWords)

// TEST incorrect variable types
console.log('\nTEST incorrect variable types')
testPuzzle = ['1000']
testWords = 'java'
crosswordSolver(testPuzzle, testWords)

// TEST empty puzzle and words
console.log('\nTEST empty puzzle and words')
testPuzzle = ''
testWords = ['']
crosswordSolver(testPuzzle, testWords)

// TEST one word horizontally
console.log('\nTEST one word horizontally')
testPuzzle = '1000'
testWords = ['java']
crosswordSolver(testPuzzle, testWords)

// TEST one word vertically
console.log('\nTEST one word vertically')
testPuzzle = '1\n0\n0\n0'
testWords = ['grit']
crosswordSolver(testPuzzle, testWords)

// TEST word too long
console.log('\nTEST word too long')
testPuzzle = '1\n0\n0\n0'
testWords = ['gritlab']
crosswordSolver(testPuzzle, testWords)

// TEST word too short
console.log('\nTEST word too short')
testPuzzle = '1000000'
testWords = ['grit']
crosswordSolver(testPuzzle, testWords)

// TEST too many words
console.log('\nTEST too many words')
testPuzzle = '10000'
testWords = ['grito', 'olab']
crosswordSolver(testPuzzle, testWords)

// TEST too little words
console.log('\nTEST too little words')
testPuzzle = '10001\n....0\n....0\n....0'
testWords = ['grito']
crosswordSolver(testPuzzle, testWords)

// TEST two words from the same starting point
console.log('\nTEST two words from the same starting point')
testPuzzle = '2000\n0...\n0...\n0...\n0...'
testWords = ['grit', 'grind']
crosswordSolver(testPuzzle, testWords)

// TEST two words from the same starting point (no unique solution)
console.log('\nTEST two words from the same starting point (no unique solution)')
testPuzzle = '2000\n0...\n0...\n0...'
testWords = ['grit', 'grid']
crosswordSolver(testPuzzle, testWords)

// TEST two words from different starting point
console.log('\nTEST two words from different starting point')
testPuzzle = '10001\n....0\n....0\n....0'
testWords = ['gritX', 'Xlab']
crosswordSolver(testPuzzle, testWords)

// TEST two of the same word
console.log('\nTEST two of the same word')
testPuzzle = '2000\n0...\n0...\n0...'
testWords = ['grit', 'grit']
crosswordSolver(testPuzzle, testWords)

// TEST three words of different length (unique solution)
console.log('\nTEST three words of different length (unique solution)')
testPuzzle = '..1..\n.100.\n..0..\n1000.\n..0..'
testWords = ['fiver', 'six', 'tied']
crosswordSolver(testPuzzle, testWords)

// TEST three words of different length (no unique solution)
console.log('\nTEST three words of different length (no unique solution)')
testPuzzle = '..1..\n.100.\n..0..\n10000\n..0..'
testWords = ['queen', 'sun', 'queer']
crosswordSolver(testPuzzle, testWords)

// TEST three words of different length (no solution)
console.log('\nTEST three words of different length (no solution)')
testPuzzle = '20000\n0....\n0....\n0....\n100..'
testWords = ['queen', 'fun', 'queer']
crosswordSolver(testPuzzle, testWords)

// TEST no starting number
console.log('\nTEST no starting number')
testPuzzle = '0000'
testWords = ['']
crosswordSolver(testPuzzle, testWords)

// TEST too big starting number
console.log('\nTEST too big starting number')
testPuzzle = '30000\n0....\n0....\n0....\n100..'
testWords = ['queen', 'run', 'queer']
crosswordSolver(testPuzzle, testWords)

// TEST incorrect starting number
console.log('\nTEST incorrect starting number')
testPuzzle = '10000\n0....\n1....\n0....\n100..'
testWords = ['queen', 'run', 'queer']
crosswordSolver(testPuzzle, testWords)


// TEST 10 words
console.log('\nTEST 10 words')
testPuzzle = `......1.1..1000010.
......0.0.......0..
..1...0.0.1000000..
1000000.0.......0..
..0...0.0..1....0..
..0...0.0..0....0..
..0...1000000000000
..0...0.0..0....0..
..0.....0..0....0..
..0.....0.......0..
..0....100000000...
..0.....0..........
......100000000000.`
testWords = ['javascript', 'project', 'piscine', 'checkpoint', 'bomberman', 'miniframework', 'realtime', 'forum', 'graphql', 'socialnetwork', 'makeyourgame']
crosswordSolver(testPuzzle, testWords)
