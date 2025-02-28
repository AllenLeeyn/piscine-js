function race(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);
            p.then(resolve).catch(reject);
        });
    });
};

function some(promises, count){
    const results = [];
    if (promises.length === 0 || count === 0) return [];
    let resolvedCount = 0;

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);

            p.then(result=>{
                results.push(result);
                if (results.length === count) return resolve(results);
            }).catch(reject)
        });
    });
};