const nasa = (n) =>{
    let result = '1';
    for (let i = 2; i <= n; i++){
        if (i%3 === 0 && i%5 === 0){
            result = result + ' NASA' 
        } else if (i%3 === 0){
            result = result + ' NA' 
        }  else if (i%5 === 0){
            result = result + ' SA' 
        }  else {
            result = result + ' ' + String(i) 
        }
    };
    return result;
};
/* 
console.log(nasa(15)) // '1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA'))
console.log(nasa(60)) // { NA: 16, NASA: 4, SA: 8, _: 32 }))
console.log(nasa(100)) // { NA: 27, NASA: 6, SA: 14, _: 53 }))
console.log(nasa(300)) // { NA: 80, NASA: 20, SA: 40, _: 160 }))
console.log(nasa(900).slice(-36)) // 'NA 892 893 NA SA 896 NA 898 899 NASA'))
 */