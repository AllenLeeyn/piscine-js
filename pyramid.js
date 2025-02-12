const printLn = (str, num) => {
    let result = '';
    for (let i = 0; i < num; i++){
        result = result + str;
    };
    return result;
};

const pyramid = (str, num) =>{
    const space = printLn(' ', str.length);
    let result = (num > 0) ? printLn(str, 2 * num - 1) : '';

    for (let i = num-1; i > 0; i--){
        let ln = printLn (space, num-i) + printLn(str, 2 *i - 1);
        result = ln + '\n' + result;
    };
    return result
};

/* 
console.log(pyramid('a', 5)) // $5.slice(1, -1)))
console.log(pyramid('+', 10)) // $10.slice(1, -1)))
console.log(pyramid('#', 40)) // $40.slice(1, -1)))
console.log(pyramid('{}', 12)) // $12.slice(1, -1)))
console.log(pyramid('ABC', 7)) // $7.slice(1, -1)))
console.log(pyramid('<^>', 13)) // $13.slice(1, -1)))
 */
