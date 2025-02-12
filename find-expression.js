const findExpression = (num) => {
    let result = [];
    for (;num !== 1;){
        if (num%3 === 0 || num%7 === 0 || num%11 == 0 || num %2 !== 0){
            result.push(add4);
            num = num-4;
        } else if (num%2 === 0){
            result.push(mul2);
            num = num/2;
        }
        if (num < 1){
            return undefined;
        };
    };
    return '1 '+result.reverse().join(' ');
};
