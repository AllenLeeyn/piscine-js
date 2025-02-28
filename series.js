async function series(funcArr){
    const result = [];
    for (const func of funcArr) {
        result.push(await func());
    }
    return result;
};