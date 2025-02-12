const findExpression = (num) => {
    result = '';
    for (;num !== 0;){
        if (num%2 === 0){
            result = result + mul2;
            num = num/2;
        } else {
            result = add4 + result;
            num = num-4;
        }

    };
    return '1'+result;
};
