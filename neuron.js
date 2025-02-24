const neuron = (arr) => {
    const obj = {};
    arr.forEach(e => {
        const exchange = e.split(' - ');
        const question = exchange[0].split(': ');
        const promptType = question[0].toLowerCase();
        const qVal = question[1];
        const qKey = question[1].toLowerCase().replaceAll(/[ !?]/g, (match) => match === ' ' ? '_' : '');

        const response = exchange[1].split(': ');
        const rKey = response[0].toLowerCase();
        const rVal = response[1];

        let curResponse = [];
        if (!obj[promptType]) {
            obj[promptType] = {}
        } 
        if (obj[promptType][qKey]) {
            curResponse = obj[promptType][qKey].responses;
        };
        obj[promptType][qKey] = {
            [promptType.slice(0, -1)]: qVal,
            responses: [...curResponse,rVal]
        };
    });
    return obj;
};
