const opThrottle = (func, wait = 0, options = {}) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    let lastCallTime = 0;
    let timeout;
    let called = false;
    let leading = (options.leading === undefined) ? false : options.leading;
    let trailing = (options.trailing === undefined) ? true : options.trailing;

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (leading && !called) {
            func(...args);
            lastCallTime = now;
            called = true;
        }
        if (timeSinceLastCall >= wait) {
            if (trailing && !called){
                func(...args);
                lastCallTime = now;
            }
        } else {
            clearTimeout(timeout);
            if (trailing) {
                timeout = setTimeout(() => {
                    func(...args);
                    lastCallTime = Date.now();
                }, wait - timeSinceLastCall);
            };
        }
    };
};

const throttle = (func, wait = 0) => {
    let lastCallTime = 0;
    let timeout;
    let trailingCall = false;

    return (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        if (timeSinceLastCall > wait){
            func(...args);
            lastCallTime = now;
        } else if (!trailingCall){
            trailingCall = true;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...args);
                lastCallTime = now;
            }, wait - timeSinceLastCall);
        };
    };
};
