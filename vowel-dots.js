const vowels = /[aeiouAEIOU]/g
const vowelDots = (str) => {
    return str.replace(vowels, (match) => match + '.');
};
