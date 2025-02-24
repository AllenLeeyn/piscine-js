const deepCopy = (obj) => {
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
    
    const objArr = [];
    if (Array.isArray(obj)){
        for (const val of obj){
            objArr.push(deepCopy(val));
        };
        return objArr;
    } else if (typeof obj === 'object' && obj !== null){
        for (const [key, val] of Object.entries(obj)){
            objArr.push([key,deepCopy(val)]);
        };
        return Object.fromEntries(objArr);
    };
    return obj;
};
