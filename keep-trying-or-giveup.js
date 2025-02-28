function retry(count, callback){
    let i = 0;

    return async function again(...args){
        return await callback(...args).catch(err => {
            if (i >= count) throw err;
            i++;
            return again(...args);
        });
    }
};

function timeout(delay, callback){
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(new Error('timeout'))
        }, delay);
    });

    return async function(...args){
        return Promise.race([callback(...args), promise]).then(result=>{
            if (result instanceof Error) throw value;
            return value;
        });
    };
};