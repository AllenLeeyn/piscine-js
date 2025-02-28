function interpolation(obj){
    let i = 0;
    let xStep = (obj.end - obj.start) / obj.step;
    let yStep = obj.duration/ obj.step;

    let intervalId = setInterval(()=>{
        obj.callback([(xStep*i)+obj.start, yStep*(i+1)]);
        i++;
        if (i >= obj.step) clearInterval(intervalId);
    }, yStep);
};