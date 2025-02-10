
const is = {}

is.num = (n) => typeof n === 'number' && !Number.isNaN(n);

const getAcceleration = (n) =>{
    if (is.num(n.f) && is.num(n.m)){
        return n.f/n.m
    }
    if (is.num(n.Δv) && is.num(n.Δt)){
        return n.Δv/n.Δt
    }
    if (is.num(n.d) && is.num(n.t)){
        return 2*n.d/(n.t*n.t)
    }
    return "impossible"
}

/* 
console.log(getAcceleration({}))
console.log(getAcceleration({ d: 10, f: 2, Δv: 100 }))
console.log(getAcceleration({ f: 10, Δv: 100 }))
console.log(getAcceleration({ f: 10, m: 5 }))
console.log(getAcceleration({ f: 10, m: 5, Δv: 100, Δt: 50 }))
console.log(getAcceleration({ Δv: 100, Δt: 50 }))
console.log(getAcceleration({ f: 10, Δv: 100, Δt: 50 }))
console.log(getAcceleration({ f: 10, m: 5, Δt: 100 }))
console.log(getAcceleration({ d: 10, t: 2, Δv: 100 }))
console.log(getAcceleration({ d: 100, t: 2, f: 100 })) 
*/
