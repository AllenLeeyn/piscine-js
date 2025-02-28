function all(promises){
    return new Promise((resolve, reject) => {
        const results = {};
        let remaining = Object.keys(promises).length;
    
        if (remaining === 0) return resolve(results);

        for (const [key, val] of Object.entries(promises)){
            val.then((res)=>{
                results[key] = res;
                remaining--;
                if (remaining === 0) resolve(results);
            }).catch((error) => reject(error));
        };
    });
};