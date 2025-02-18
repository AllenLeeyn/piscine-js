const every = (arr, fn) => {
    for (const val of arr){
        if (!fn(val)) return false;
    }
    return true;
};

const some = (arr, fn) => {
    for (const val of arr){
        if (fn(val)) return true;
    }
    return false;
};

const none = (arr,fn) => !some(arr,fn);
