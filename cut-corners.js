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
    if (b == 0) {return 0;};
    a = abs(a);
    b = abs(b);
    let result = 0;
    for (let i = 0; multiply(b,i) < a;i++ ){
        result = i
    }
    return (isNeg)? -result: result;
};

const modulo = (a, b) =>a - multiply(b, divide(a, b));

const round = (n) => {
    const isNeg = (n < 0);
    n = abs(n);
    let result = (modulo(n,1)>= 0.5 ? divide(n,1)+1 : divide(n,1));
    return (isNeg)? -result: result;
};

const ceil = (n) => {
    const isNeg = (n < 0);
    n = abs(n);
    const shift = (isNeg)? 0: 1;
    let result = (modulo(n,1)> 0 ? divide(n,1)+shift : divide(n,1));
    return (isNeg)? -result: result;
};

const floor = (n) => {
    const isNeg = (n < 0);
    n = abs(n);
    const shift = (isNeg)? 1: 0;
    let result = divide(n,1)+shift;
    return (isNeg)? -result: result;
};

const trunc = (n) =>divide(n,1);
