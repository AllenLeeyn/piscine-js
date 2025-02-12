const RNA = (str) => {
    let result = '';
    for (const char of str){
        if (char == 'G'){
            result = result + 'C';
        } else if (char == 'C'){
            result = result + 'G';
        } else if (char == 'T'){
            result = result + 'A';
        } else if (char == 'A'){
            result = result + 'U';
        }
    }
    return result;
};
const DNA = (str) => {
    let result = '';
    for (const char of str){
        if (char == 'G'){
            result = result + 'C';
        } else if (char == 'C'){
            result = result + 'G';
        } else if (char == 'A'){
            result = result + 'T';
        } else if (char == 'U'){
            result = result + 'A';
        }
    }
    return result;
};
