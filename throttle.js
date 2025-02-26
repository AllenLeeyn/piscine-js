const opThrottle = (func, wait = 0, options = {}) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    let lastCallTime = 0;
    let called = false;
    let leading = (options.leading === undefined) ? false : options.leading;
    let trailing = (options.trailing === undefined) ? true : options.trailing;

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (leading && !called) {
            func(...args);
            called = true;
            lastCallTime = now;
        }
        if (timeSinceLastCall >= wait) {
            if (trailing && !called) {
                func(...args);
                called = true;
                lastCallTime = now;
            };
            called = false;
        };
    };
};

const throttle = (func, wait = 0) => {
    let lastCallTime = 0;
    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (timeSinceLastCall >= wait){
            func(...args);
            lastCallTime = now;
        };
    };
};
