
function opThrottle(func, wait, { leading = false, trailing = true } = {}) {
    let lastCallTime = 0;
    let timeoutID = null;
    return function () {
        const now = Date.now();
        if (!lastCallTime && !leading) {
            lastCallTime = now;
        }
        if (now - lastCallTime > wait) {
            if (timeoutID) {
                clearTimeout(timeoutID);
                timeoutID = null;
            }
            func.apply(this, arguments);
            lastCallTime = now;
        } else if (!timeoutID && trailing) {
            timeoutID = setTimeout(() => {
                func.apply(this, arguments);
                lastCallTime = Date.now();
                timeoutID = null;
            }, wait);
        }
    };
}

const throttle = (func, wait = 0) => {
    let lastCallTime = 0;
    let timeout;
    let trailingCall = false;

    return function () {
        const now = Date.now();
        if (now - lastCallTime > wait){
            func.apply(this, arguments);
            lastCallTime = now;
        } else if (!trailingCall){
            trailingCall = true;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, arguments);
                lastCallTime = Date.now();
            }, wait - now - lastCallTime);
        };
    };
};
