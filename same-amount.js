const addGlobalFlag = (regexp) => {
    if (!regexp.flags.includes('g')){
        return new RegExp(regexp.source, regexp.flags + 'g')
    };
    return regexp;
};

const sameAmount = (str, regexp1, regexp2) =>{
    const match1 = str.match(addGlobalFlag(regexp1));
    const match2 = str.match(addGlobalFlag(regexp2));
    const length1 =  (match1 === null) ? 0 : match1.length;
    const length2 =  (match2 === null) ? 0 : match2.length;

    return length1 === length2;
};
