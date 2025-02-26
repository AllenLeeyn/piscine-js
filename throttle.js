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

const throttle = (func, wait = 0) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    return debounce(func, wait, {
      'maxWait': wait, trailing: true
    });
};

const opThrottle = (func, wait = 0, options) => {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });};
