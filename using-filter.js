const filterShortStateName = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.filter(word => word.length < 7);
};

const filterStartVowel = (arr) => {
    if (!Array.isArray(arr)) return;
    const qry = /^[aeiou]/;
    return arr.filter(word => qry.test(word.toLowerCase()));
};

const filter5Vowels = (arr) => {
    if (!Array.isArray(arr)) return;
    const qry = /[aeiou]/g;
    return arr.filter(word => word.toLowerCase().match(qry).length > 4);
};
const filter1DistinctVowel = (arr) => {
    if (!Array.isArray(arr)) return;
    const qry = /[aeiou]/g;
    return arr.filter(word => {
        let matches = word.toLowerCase().match(qry);
        matches = new Set(matches);
        return matches.size === 1;
    });
};

const multiFilter = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.filter(obj => {
        if (obj.capital.length >= 8) {
            if (!/^[AEIOU]/.test(obj.name)) {
                if (/[AEIOU]/.test(obj.tag)) {
                    if (obj.region !== 'South') return true;
                };
            };
        };
        return false;
    });
};
