const deepCopy = (obj) => {
    const objArr = [];
    for (const [key, val] of Object.entries(obj)){
        if (typeof val === 'object') {
            objArr.push([key, deepCopy(val)])
        } else objArr.push([key, val]);
    }
    return Object.fromEntries(objArr);
};
