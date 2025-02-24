const replica = (tgt, ...objs) => {

    objs.forEach(obj => {
        if (obj instanceof RegExp) return tgt.push(new RegExp(obj.source, obj.flags));

        if (typeof obj === 'object'){
            for (const [key, val] of Object.entries(obj)){
                if (typeof val === 'object') {
                    tgt[key] = replica(tgt[key], val);
                } else {
                    tgt[key] = val;
                }
            };
        }
        return obj;
    });
    return tgt;
};
