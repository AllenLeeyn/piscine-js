const defaultCurry = (obj1) => (obj2) => {
    const objArr = [];
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    for (const key of keys){
        (obj2[key] === undefined) ? objArr.push([key, obj1[key]]) : objArr.push([key, obj2[key]]) ;
    }
    return Object.fromEntries(objArr);
};

const mapCurry = (fn) => (obj) => {
    const objArr = [];
    for (const entry of Object.entries(obj)){
        objArr.push(fn(entry));
    };
    return Object.fromEntries(objArr);
};

const reduceCurry = (fn) => (obj, acc) => {
    for (const [key, val] of Object.entries(obj)){
        acc = (acc === undefined) ? val : acc ;
        acc = fn(acc, [key, val]);
    };
    return acc;
};

const filterCurry = (fn) => (obj) => {
    const objArr = [];
    for (const entry of Object.entries(obj)){
        if (fn(entry)) objArr.push(entry);
    };
    return Object.fromEntries(objArr);
};

const reduceScore = (personnel, acc) => reduceCurry((acc, [key, val]) => {
    if (val.isForceUser) return acc + val.pilotingScore + val.shootingScore;
    return acc;
})(personnel, acc);

const filterForce = (personnel) => filterCurry(([key, val]) => val.isForceUser && val.shootingScore >= 80)(personnel);

const mapAverage = (personnel) => mapCurry(([key, val]) => {
    const avergScore = (val.pilotingScore + val.shootingScore)/2;
    val.averageScore = avergScore;
    return [key, val];
})(personnel);
