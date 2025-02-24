const invert = (obj) => {
    const objArr = [];

    for (const [key, value] of  Object.entries(obj)){
        console.log(key)
        objArr.push([value, key]);
    };
    return Object.fromEntries(objArr);
};
