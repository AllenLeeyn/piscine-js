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

    return (isStr)? join(result,''): result;
};

const chunk = (arr, size) =>{
    const result = [];

    for (;arr.length > size;){
        result.push(slice(arr, 0, size));
        arr = slice(arr, size);
    };
    result.push(arr);
    return result;
};
