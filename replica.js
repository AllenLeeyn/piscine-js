const replicaOne = (tgt, obj) => {
    if (typeof obj === 'object'){
        for (const [key, val] of Object.entries(obj)){
            if (typeof val === 'object') {
                if (typeof tgt[key] !== 'object' || Array.isArray(tgt[key])) tgt[key] = {};
                if (Array.isArray(val)) {
                    tgt[key] = [...val]
                } else if (val instanceof RegExp) {
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
};

const replica = (tgt, ...objs) => {
    objs.forEach(obj => replicaOne(tgt, obj));
    return tgt;
};
