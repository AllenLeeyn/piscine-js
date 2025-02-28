function race(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);
            p.then(resolve).catch(reject);
        });
    });
};

function some(promises, count){
    if (promises.length === 0 || count === 0) return [];

    const results = new Array(promises.length).fill(null);
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);

            p.then(result=>{
                results[index] = result;
                resolvedCount++;

                if (resolvedCount === count) return resolve(results.filter(val => val !== null));
            }).catch(reject)
        });
    });
};