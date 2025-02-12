const baseFlat = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++){
                result.push(arr[i][j]);
            };
            continue;
        }
        result.push(arr[i]);
    };
    return result;
};

const flat = (arr, depth) =>{
    depth = (depth === undefined) ? 1: depth;
    depth = (depth === Infinity) ? Number.MAX_SAFE_INTEGER: depth;
    for (let i = 0; i < depth; i++){
        let isAllNum = true;
        arr = baseFlat(arr);

        for (let j = 0; j < arr.length; j++){
            if (Array.isArray(arr[j])) {
                isAllNum = false;
                break;
            }
        };

        if (isAllNum){
            break;
        }
    }
    return arr;
};
