const hashCode = str =>
    (
      [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36)

const genesis = { index: 0, hash: '0'};

const blockChain = (data, prev) => {
    if (data === undefined){
        return;
    }
    if (prev === undefined){
        prev = genesis;
    }
    const index = prev.index+1;
    const hashData = String(index)+ String(prev.index) + JSON.stringify(data)
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
