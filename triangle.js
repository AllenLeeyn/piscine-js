const triangle = (str, num) =>{
    let result = (num > 0) ? str + '\n': '';

    for (let i = 1; i < num; i++){
        let ln = '';
        for (let j = 0; j <= i; j++){
            ln = ln + str;
        };
        result = result + ln + '\n';
    };
    return result
};
