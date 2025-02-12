const get = (src, path) =>{
    const keys = path.split('.');
    let result = undefined;
    for (const curKey of keys){
        let found = false;
        for (const [key, value] of Object.entries(src)) {
            if (curKey === key){
                src = value;
                found = true;
                break;
            }
        };
        if (!found){
            return undefined;
        }
    }
    return src;
};
