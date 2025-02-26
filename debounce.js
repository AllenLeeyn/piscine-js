const debounce = (fn, delay) => {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), delay);
    };
};

const opDebounce = (fn, delay) => {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        fn(...args)
        timeout = setTimeout(null, delay);
    };
};