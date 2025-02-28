function race(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            const p = (promise instanceof Promise) ? promise : Promise.resolve(promise);
            p.then(resolve).catch(reject);
        });
    });
};

function some(promiseArr){};