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

const totalCalories = (obj) => reduceEntries(obj, (acc = 0, [key, val]) => {
    return acc+(val/100 * nutritionDB[key].calories);
});

const lowCarbs = (obj) => filterEntries(obj, ([key, val]) => {
    return ((val/100 * nutritionDB[key].carbs) < 50)
});

const cartTotal = (obj) => mapEntries(obj, ([key, val]) => {
    return [key, {
        calories: (val/100) * nutritionDB[key].calories,
        protein: (val/100) * nutritionDB[key].protein,
        carbs: (val/100) * nutritionDB[key].carbs,
        sugar: (val/100) * nutritionDB[key].sugar,
        fiber: (val/100) * nutritionDB[key].fiber,
        fat: (val/100) * nutritionDB[key].fat,
    }]
});
