const flags = (data) => {
    const obj = { alias: {h: 'help'}, description: []}
    const helpVals = (data.help) ? data.help: [];
    const helpAll = (data.help === undefined);
    
    console.log(helpVals)
    for (const [key, val] of Object.entries(data)){
        if (key === 'help') continue;

        obj.alias[key.slice(0,1)] = key;
        if (helpAll) helpVals.push(key);
    }
    for (const key of helpVals){
        obj.description.push(`-${key.slice(0,1)}, --${key}: ${data[key]}`) 
    }
    obj.description = obj.description.join('\n');
    return obj;
};
