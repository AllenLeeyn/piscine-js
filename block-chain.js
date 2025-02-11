const genesis = { index: 0, hash: '0'};

const blockChain = (data, prev) => {
    if (data === undefined){
        return;
    }
    if (prev === undefined){
        prev = genesis;
    }
    const index = prev.index+1;
    const hashData = String(index)+ String(prev.hash) + JSON.stringify(data)
    const hash = hashCode(hashData);
    const result = {
        index: index,
        hash: hash,
        data: data,
        prev: prev,
    };
    result.chain = (n) =>blockChain(n, result);
    return result;
};
