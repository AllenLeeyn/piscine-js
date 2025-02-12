const indexOf = (arr, tgt, start) =>{
    if (start === undefined){start = 0;};
    const len = (start >= arr.length) ? -1:arr.length;
    for (let i = start; i < len; i++){
        if (arr[i] === tgt){return i;};
    }
    return -1;
};

const lastIndexOf = (arr, tgt, start) =>{
    const len = (start >= arr.length) ? -1:arr.length;
    if (start === undefined){start = len-1;};
    for (let i = start; i >= 0; i--){
        if (arr[i] === tgt){return i;};
    }
    return -1;
};

const includes = (arr, tgt, start) =>{
    return indexOf(arr, tgt, start) !== -1;
};
