
function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    return function () {
        const now = Date.now();
        if (!last && !leading) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = Date.now();
                timer = null;
            }, delay);
        }
    };
}

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
