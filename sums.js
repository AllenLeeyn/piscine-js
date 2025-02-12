const getCombi = (num, start, curArr, resultArr) => {
    let sum = 0;
    for (const value of curArr){
        sum = sum + value;
    };

    if (sum > num){
        return resultArr;
    };
    if (sum === num){
        console.log(curArr);
        resultArr.push(curArr.slice());
        return resultArr;
    };

    for (let i = start; i < num; i++){
        curArr.push(i);
        resultArr = getCombi(num, i, curArr, resultArr);
        curArr.pop();
    };
    return resultArr;
};

const sums = (num) => {
    const count = (num/2);
    return getCombi(num, 1, [],[]);
};
