
const ltrSpcNumRegExp = /[a-zA-Z]\s[0-9](?=\s|[,.]|$)/g;

const letterSpaceNumber = (str) => {
    const result = str.match(ltrSpcNumRegExp)
    return (result === null) ? [] : result;
};
