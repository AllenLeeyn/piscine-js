const add4 = '+4'
const mul2 = '*2'

const findExpression = (num) => {
    let result = '';
    for (;num !== 1;){
        if (num%2 === 0){
            result = result + mul2;
            num = num/2;
        } else {
            result = add4 + result;
            num = num-4;
        };
        if (num < 1){
            return undefined;
        };
    };
    return '1'+result;
};
