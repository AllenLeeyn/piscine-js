
const ltrSpcNumRegExp = /[a-zA-Z]\s[0-9](?=\s|[,.]|$)/g;

const letterSpaceNumber = (str) => {
    return str.match(ltrSpcNumRegExp);
};
