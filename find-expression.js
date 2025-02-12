
const findExpression = (num) => {
    let result = [];
    for (;num !== 1;){
        if (num%2 === 0){
            result.push(mul2);
            num = num/2;
        } else {
            result.push(add4);
            num = num-4;
        };
        if (num < 1){
            return undefined;
        };
    };
    return '1 '+result.reverse().join(' ');
};
