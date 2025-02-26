const opThrottle = (func, wait = 0, options = {}) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    let lastCallTime = 0;
    let timeout;
    let leading = (options.leading === undefined) ? false : options.leading;
    let trailing = (options.trailing === undefined) ? false : options.trailing;

    return (...args) => {
        const now = Date.now();
        if (!lastCallTime && !leading) lastCallTime = now;

        const timeSinceLastCall = now - lastCallTime;
        if (timeSinceLastCall >= wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout= null;
            };
            func(...args);
            lastCallTime = now;
        } else if (!timeout && trailing){
            timeout = setTimeout(() => {
                func(...args);
                lastCallTime = now;
                timer = null;
            }, wait);
        };
    };
};

const throttle = (func, wait = 0, options) => {
    return opThrottle(func, wait, options);
};
