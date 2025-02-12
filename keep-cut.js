const slice =(arr, start, end)=>{
    const isStr = (typeof arr === "string");
    if (isStr){arr = Array.from(arr);};
    const result = [];
    const len = arr.length;

    if (start === undefined || start < -len){
        start = 0;
    } else if (-len <= start && start < 0){
        start = start + len;
    };

    if (end === undefined || end >= len){
        end = len;
    } else if (end < -len){
        end = 0;
    } else if (-len <= end && end < 0){
        end = end + len;
    };

    for (let i = start; i < end; i++){
        result.push(arr[i]);
    };
    return (isStr)? result.join(''): result;
};

const cutFirst = (str) =>slice(str, 2);
const cutLast = (str) =>slice(str, 0, -2);
const cutFirstLast = (str) =>slice(str, 2, -2);
const keepFirst = (str) =>slice(str,0,2);
const keepLast = (str) =>slice(str,-2);
const keepFirstLast = (str) =>{
    if (str.length <= 4){
        return str
    }
    return keepFirst(str)+keepLast(str)
};
