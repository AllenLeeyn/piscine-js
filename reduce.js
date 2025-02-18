const reduce = (arr, fn, acc) => {

    if (acc !== undefined){
        arr = [acc, ...arr];
    };
    let result = arr[0];
    for (let i = 1; i < arr.length; i++){
        result = fn(result, arr[i]);
    };
    return result;
};

const reduceRight = (arr, fn, acc) => {
    const newArr = [];
    for (let i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    };
    return reduce(newArr, fn, acc);
};

const fold = (arr, fn, acc) => {
    return reduce(arr, fn, acc);
};

const foldRight = (arr, fn, acc) => {
    return reduceRight(arr, fn, acc);
};
