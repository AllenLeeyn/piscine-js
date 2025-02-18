const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr);
    };
};

const reduce = (arr, fn, acc) => {
    if (acc !== undefined){
        arr = [acc, ...arr];
    };
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result = fn(result, arr[i]);
    };
    return result;
};
const reduceRight = (arr, fn, acc) => {
    return reduce(arr.reverse(), fn, acc);
};

const fold = (arr, fn, acc) => {
    return reduce(arr, fn, acc);
};

const foldRight = (arr, fn, acc) => {
    return reduceRight(arr, fn, acc);
};
