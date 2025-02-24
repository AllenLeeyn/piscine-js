const fusion = (obj1, obj2) => {
    const objArr = [];
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const key of keys){
        const val1 = obj1[key];
        const val2 = obj2[key];
        const valType = typeof val1

        if (typeof val1 !== typeof val2){
            (typeof val2 === 'undefined') ? objArr.push([key, val1]) : objArr.push([key, val2]) ;
            continue;
        };
        if (valType === 'string') {
            objArr.push([key, val1+' '+val2])
        } else if (valType === 'number') {
            objArr.push([key, val1+val2])
        } else if (valType === 'object') {
            if (Array.isArray(val1) && Array.isArray(val2)) {
                objArr.push([key, [...val1,...val2]]);
            } else {
                objArr.push([key, fusion(val1,val2)]);
            };
        };
    };
    return Object.fromEntries(objArr);
};
