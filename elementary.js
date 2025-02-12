const abs = (n) => (n < 0 ? -n: n);

const multiply = (a, b) =>{
    const isNeg = (a < 0) !== (b < 0);
    a = abs(a);
    b = abs(b);

    let result = 0;
    for (let i = 0; i < b; i++){
        result = result + a;
    }
    return (isNeg)? -result: result;
};

const divide = (a, b) => {
    const isNeg = (a < 0) !== (b < 0);
    if (b === 0) {return 0;};
    a = abs(a);
    b = abs(b);
    let result = 0;
    for (let i = 1; multiply(b,i) < a;i++ ){
        result = i
    }
    return (isNeg)? -result: result;
};

const modulo = (a, b) =>{
    return a - multiply(b, divide(a, b));;
};
