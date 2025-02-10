/*
Write 5 functions:

words: that takes a string, splits it by spaces, and returns an array of those substrings.
sentence: that takes an array of strings, and joins them with spaces to return a single string.
yell: that takes a string and returns it in upper case.
whisper: that takes a string and returns it in lower case, surrounded by *.
capitalize: that takes a string and transforms it so that the first character is upper case, 
and the subsequent characters are lower case.
*/

const words = (str) => str.split(' ');
const sentence = (words) => words.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => str.tolowerCase();
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).tolowerCase();