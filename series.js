function series(funcArr){
    const result = [];
    funcArr.forEach(async(e) => {
        result.push(await e());
    });
    return result;
};