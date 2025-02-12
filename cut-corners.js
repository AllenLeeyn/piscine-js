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
        result = i;
    }
    return (isNeg)? -result: result;
};

const modulo = (a, b) =>a - multiply(b, divide(a, b));

const round = (n) => {
    if (n === Infinity || n === -Infinity) {
        return n;
    }
    const isNeg = (n < 0);
    n = abs(n);
    let result = (modulo(n,1)>= 0.5 ? divide(n,1)+1 : divide(n,1));
    return (isNeg)? -result: result;
};

const ceil = (n) => {
    if (n === Infinity || n === -Infinity) {
        return n;
    }
    const isNeg = (n < 0);
    n = abs(n);
    const shift = (isNeg)? 0: 1;
    let result = (modulo(n,1)> 0 ? divide(n,1)+shift : divide(n,1));
    return (isNeg)? -result: result;
};

const floor = (n) => {
    if (n === Infinity || n === -Infinity) {
        return n;
    }
    const isNeg = (n < 0);
    n = abs(n);
    const shift = (isNeg)? 1: 0;
    let result = divide(n,1)+shift;
    return (isNeg)? -result: result;
};

const trunc = (n) =>{
    if (n === Infinity || n === -Infinity) {
        return n;
    }
    return divide(n,1)
};


const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))

/* 
console.log((nums.map(round), [3, -3, 3, -3, 0]))
console.log((nums.map(floor), [3, -4, 2, -3, 0]))
console.log((nums.map(trunc), [3, -3, 2, -2, 0]))
console.log((nums.map(ceil), [4, -3, 3, -2, 0])) 
*/
