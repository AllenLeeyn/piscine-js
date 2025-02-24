const deepCopy = (obj) => {
    const objArr = [];
    if (Array.isArray(obj)){
        for (const val of obj){
            objArr.push(deepCopy(val));
        };
    } else {
        for (const [key, val] of Object.entries(obj)){
            if (typeof val === 'object') {
                objArr.push([key, deepCopy(val)])
            } else objArr.push([key, val]);
        };
        return Object.fromEntries(objArr);
    };
    return obj;
};
