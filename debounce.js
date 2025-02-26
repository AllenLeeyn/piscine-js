const debounce = (fn, delay) => {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), delay);
    };
};

const opDebounce = (fn, delay, options = {leading: false, trailing: true}) => {
    let timeout;
    let lastArgs;
    let lastCallTime = 0;

    return (...args)=>{
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (options.leading && timeSinceLastCall >= delay){
            fn(...args);
            lastCallTime = now;
        }

        clearTimeout(timeout);

        if (options.trailing) {
            timeout = setTimeout(()=>{
                fn(...args);
            }, delay);
        };
        lastArgs = args;
    };
};