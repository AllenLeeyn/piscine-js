
const ltrSpcNumRegExp = /(^|)[a-zA-Z]\s[0-9](\W|$)/g;

const letterSpaceNumber = (str) => {
    return str.match(ltrSpcNumRegExp);
};
