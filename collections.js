const is = {}

is.num = (n) => typeof n === 'number';
is.nan = (n) => Number.isNaN(n);
is.str = (n) => typeof n === 'string';
is.bool = (n) => typeof n === 'boolean';
is.undef = (n) => n === undefined;
is.def = (n) => !is.undef(n);
is.arr = (n) => Array.isArray(n);
is.obj = (n) => (typeof n === 'object' || typeof n === null) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === 'function';

const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => Array.from(set);
const setToStr = (set) => arrToStr(setToArr(set));
const strToArr = (str) => str.split('');
const strToSet = (str) => arrToSet(strToArr(str));
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Array.from(Object.values(obj));
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToMap = (arr) => new Map(arr.map((value, index) => [index, value]));
const arrToObj = (arr) => Object.fromEntries(arrToMap(arr));
const strToObj = (str) => arrToObj(strToArr(str));

const superTypeOf = (n) =>{
    if (n instanceof Set) {return 'Set'};
    if (n instanceof Map) {return 'Map'};
    if (is.obj(n)) {return 'Object'};
    if (is.str(n)) {return 'String'};
    if (is.num(n)) {return 'Number'};
    if (is.arr(n)) {return 'Array'};
    if (n === null) {return 'null'};
    if (is.undef(n)) {return 'undefined'};
    if (is.fun(n)) {return 'Function'};
};
