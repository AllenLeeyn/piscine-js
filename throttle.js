const opThrottle = (func, wait = 0, options) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    let lastCallTime = 0;
    let lastArgs;
    let lastThis;
    let timeout;
    let leading = (options.leading === undefined) ? false : options.leading;
    let trailing = (options.trailing === undefined) ? false : options.trailing;

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (timeSinceLastCall >= wait) {
            if (leading) func(...args);
            lastCallTime = now;
        } else {
            clearTimeout(timeout);
            if (trailing) {
                timeout = setTimeout(() => {
                    func(...args);
                    lastCallTime = now;
                }, wait - timeSinceLastCall);
            };
        };
    };
};

const throttle = (func, wait = 0, options) => {
    return opThrottle(func, wait, options);
};
