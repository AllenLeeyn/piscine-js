const debounce = (fn, delay) => {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), delay);
    };
};

const opDebounce = (func, wait = 0, options = {leading: false, trailing: true}) => {
    let timeout;
    let lastCallTime = 0;
    let lastInvokeTime = 0;
    const maxing = 'maxWait' in options;
    let maxWait = maxing ? Number(options.maxWait) : 0;

    function shouldInvoke(now) {
        const timeSinceLastCall = now - lastCallTime;
        const timeSinceLastInvoke = now - lastInvokeTime;

        return ((lastCallTime === undefined) || 
                (timeSinceLastCall>= wait) ||
                (timeSinceLastCall < 0) || 
                (maxing && timeSinceLastInvoke >= maxWait))
    };
    
    return (...args)=>{
        const now = Date.now();
        if (options.leading && shouldInvoke(now)){
            func(...args);
            lastInvokeTime = now;
            lastCallTime = now;
        }

        clearTimeout(timeout);

        if (options.trailing && shouldInvoke(now)) {
            timeout = setTimeout(()=>{
                lastInvokeTime = now;
                func(...args);
            }, wait);
        };
    };
};