String.prototype.split = undefined
String.prototype.match = undefined
RegExp.prototype.exec = undefined
Array.prototype.join = undefined

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

const split = (str, sep) =>{
    if (str === ''){
        return [''];
    }
    if (sep.length > str.length){
        return str;
    };

    const arr = [];
    let start = 0;
    for (let i = 0; i < str.length; i++){
        if (i <= str.length - sep.length && slice(str, i, i+sep.length) === sep){
            arr.push(slice(str, start, i));
            start = i+sep.length;
            i = (sep === '') ? i : i +sep.length-1;
        }
        if (i === str.length-1){
            arr.push(slice(str, start));
        }
    }
    return (sep === '') ? slice(arr,1) : arr;
};

const join = (arr, conj) =>{
    let result = '';
    if (arr.length > 0) {
        result = String(arr[0])
    } else {
        return ""
    };

    for (let i = 1; i < arr.length; i++){
        result = result + conj + String(arr[i]);
    };
    return result;
};

console.log(split('a b c', ' ')) // ['a', 'b', 'c']
console.log(split('ggg - ddd - b', ' - ')) // ['ggg', 'ddd', 'b']
console.log(split('ee,ff,g,', ',')) // ['ee', 'ff', 'g', '']
console.log(split('Riad', ' ')) // ['Riad']
console.log(split('rrrr', 'rr')) // ['', '', '']
console.log(split('rrirr', 'rr')) // ['', 'i', '']
console.log(split('Riad', ''),) // ['R', 'i', 'a', 'd']
console.log(split('', 'Riad')) // ['']

console.log(join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
console.log(join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
console.log(join(['a', 'b', 'c'], ' ') === 'a b c')