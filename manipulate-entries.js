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
    const str = val.toString();
    const match = str.match(/(?:\.\d*)/);
    const precision = match ? match[0].length - 1 : 1;
    num = (val/100) * num;
    return num % 1 === 0 ? num : parseFloat(num.toFixed(precision));
};

const totalCalories = (obj) => reduceEntries(obj, (acc = 0, [key, val]) => {
    const num = acc + calcValue(val, nutritionDB[key].calories);
    return num % 1 === 0 ? num : parseFloat(num.toFixed(1));
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

const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
    vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
  }

const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 };

console.log(totalCalories(groceriesCart1)) //, 1921.4))