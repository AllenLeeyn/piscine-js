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
    let lastCallTime;

    return (...args)=>{
        const now = Date.now();
        const timeSinceLastCall = now - (lastCallTime || 0);
        if (options.leading){
            fn(...args);
            lastCallTime = now;
        }

        clearTimeout(timeout);

        if (options.trailing) {
            timeout = setTimeout(()=>{
                if (timeSinceLastCall >= delay)fn(...args);
            }, delay);
        };

        lastArgs = args;
        lastCallTime = now;
    };
};