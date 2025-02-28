function race(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);
            p.then(resolve).catch(reject);
        });
    });
};

function some(promiseArr, count){
    if (promiseArr.length === 0 || count === 0) return new Promise(()=>undefined);
    const result = [];

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);
            result.push(p.then(resolve).catch(reject));
            if (result.length === count) return result[result.length-1];
        });
    });
};