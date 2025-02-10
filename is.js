/*
Add new function properties to the is object to check value types. 
Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.
*/

is.num = (n) => typeof n === 'number';
is.nan = (n) => n === NaN;
is.str = (n) => typeof n === 'string';
is.bool = (n) => typeof n === 'boolean';
is.undef = (n) => n === undefined;
is.def = (n) => !is.undef(n);
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === 'object' || typeof n === null;
is.fun = (n) => typeof n === 'function';
is.falsy = (n) =>{
 return n === null || is.undef(n) || n === false || is.nan(n) || n === 0 || n === -0 || n === 0n || n === "";
}; 
is.truthy = (n) => !is.falsy(n);
