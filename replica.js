const replica = (tgt, ...objs) => {

    objs.forEach(obj => {
        if (typeof obj === 'object'){
            for (const [key, val] of Object.entries(obj)){
                if (typeof val === 'object') {
                    if (val instanceof RegExp) {
                        tgt[key] = new RegExp(val.source, val.flags)
                    } else {
                        tgt[key] = replica(tgt[key], val);
                    };
                } else {
                    tgt[key] = val;
                }
            };
        }
        return obj;
    });
    return tgt;
};

console.log(replica({ con: console.log }, { reg: /hello/ }))