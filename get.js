const get = (src, path) =>{
    const keys = path.split('.');
    let result = src;
    for (let key of keys) {
        result = result[key]
        if (result === undefined) {
            return undefined
        }
    }
    return result;
};
