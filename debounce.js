const debounce = (fn, delay) => {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), delay);
    };
};

const opDebounce = (fn, delay) => {
    let timeout;
    let lastArgs;
    let lastCallTime;

    return (...args)=>{
        const now = Date.now();
        const timeSinceLastCall = now - (lastCallTime || 0);
        if (!lastCallTime || timeSinceLastCall >= delay){
            fn(...args);
            lastCallTime = now;
        }
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            fn(...args);
        }, delay);
        
        lastArgs = args;
        lastCallTime = now;
    };
};