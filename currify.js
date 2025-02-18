const currify = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
          return (...args2) => {
            return curried.apply(this, args.concat(args2));
          }
        }
    }
};
