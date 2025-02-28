function timeout(delay, callback){
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(new Error('timeout'))
        }, delay);
    });

    return async function(...args){
        return Promise.race([callback(...args), promise]).then(result=>{
            if (result instanceof Error) throw result;
            return result;
        });
    };
};

async function queryServers(serverName, q){
    const url = `/${serverName}?q=${q}`;
    const urlBackup = `/${serverName}_backup?q=${q}`;
    return await Promise.race([getJSON(url), getJSON(urlBackup)]);
};

async function gougleSearch(q){
    const obj = {};
    obj.web = await timeout(80, queryServers)('web', q);
    obj.image = await timeout(80, queryServers)('image', q);
    obj.video = await timeout(80, queryServers)('video', q);

    for (const [key, val] of Object.entries(obj)){
        if (val instanceof Error) throw val;
    }
    return obj;
};