const filterEntries = (obj, fn) => {
    const objArr = [];
    for (const [key, val] of  Object.entries(obj)){
        if (fn([key, val])) objArr.push([key, val]);
    };
    return Object.fromEntries(objArr);
};
const mapEntries = (obj, fn) => {
    const objArr = [];
    for (const [key, val] of  Object.entries(obj)){
        objArr.push(fn([key, val]));
    };
    return Object.fromEntries(objArr);
};

const reduceEntries = (obj, fn, acc) => {
    for (const [key, val] of  Object.entries(obj)) {
        acc = fn(acc, [key, val]) ;
    };
    return acc;
};

const calcValue = (val, num) => {
    const str = num.toString();
    const match = str.match(/(?:\.\d*)/);
    const precision = match ? match[0].length - 1 : 1;
    num = (val/100) * num;
    return num % 1 === 0 ? num : parseFloat(num.toFixed(precision));
};
const totalCalories = (obj) => reduceEntries(obj, (acc = 0, [key, val]) => {
    return acc+calcValue(val, nutritionDB[key].calories);
});

const lowCarbs = (obj) => filterEntries(obj, ([key, val]) => {
    return ((val/100 * nutritionDB[key].carbs) < 50)
});

const cartTotal = (obj) => mapEntries(obj, ([key, val]) => {

    return [key, {
        calories: calcValue(val, nutritionDB[key].calories),
        protein: calcValue(val, nutritionDB[key].protein),
        carbs: calcValue(val, nutritionDB[key].carbs),
        sugar: calcValue(val, nutritionDB[key].sugar),
        fiber: calcValue(val, nutritionDB[key].fiber),
        fat: calcValue(val, nutritionDB[key].fat),
    }]
});
