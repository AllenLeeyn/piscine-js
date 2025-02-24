const flags = (data) => {
    const obj = { alias: {h: 'help'}, description: []}
    let helpVals = obj.help;
    for (const [key, val] of Object.entries(data)){
        if (key === 'help') continue;

        obj.alias[key.slice(0,1)] = key;
        if (helpVals === undefined || helpVals.includes(key)){
            obj.description.push(`-${key.slice(0,1)}, --${key}: ${val}`) 
        }
    }
    obj.description = obj.description.join('\n');
    return obj;
};
