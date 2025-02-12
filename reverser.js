const reverse = (arr) =>{
    const isStr = (typeof arr === "string");
    if (isStr){arr = Array.from(arr);};
    const result = [];
    const len = arr.length;
    for (let i = len -1; i >= 0; i--){
        result.push(arr[i]);
    };
    return (isStr)? result.join(''): result;
};
/* 
console.log(reverse([1, 2, 3]))
console.log(reverse('teuop'))
console.log(reverse("looc tse'c tulas"))
 */