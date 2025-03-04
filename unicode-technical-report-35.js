const getZeroDigits = (num, digitCount) =>{
    let curDigits = 1;
    let result = String(num);
    for (let i = 1; i < digitCount; i++){
        curDigits = curDigits *10
        if (num < curDigits) result = '0' + result;
    };
    return result;
};

const format = (date, formatStr) => {
    const qry = /(yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|mm|m|ss|s|HH|H|a|.)/g;
    let result = formatStr.match(qry);

    const yearNum = date.getFullYear();
    const mnthNum = date.getMonth();
    const dateNum = date.getDate();
    const dayNum = date.getDay();
    const hourNum = date.getHours();
    const minNum = date.getMinutes();
    const secNum = date.getSeconds();
    const peroid = (hourNum > 12) ? 'PM' : 'AM';

    const mmmArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const mmmmArr = [
        'January',
        'February',
        'March',
        'Apirl',
        'May',
        'June',
        'July',
        'August',
        'Septmeber',
        'October',
        'November',
        'December'
    ];
    const eArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const eeeeArr = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    for (let i = 0; i < result.length; i++){
        switch (result[i]) {
            case 'y':
                result[i] = String(Math.abs(yearNum));
                break;
            case 'yyyy':
                result[i] = getZeroDigits(Math.abs(yearNum), 4);
                break;
            case 'G':
                result [i] = (yearNum > 0 ) ? 'AD': 'BC';
                break;
            case 'GGGG':
                result [i] = (yearNum > 0 ) ? 'Anno Domini': 'Before Christ';
                break;
            case 'M':
                result[i] = String(mnthNum+1);
                break;
            case 'MM':
                result[i] = getZeroDigits(mnthNum+1, 2);
                break;
            case 'MMM':
                result [i] = mmmArr[mnthNum];
                break;
            case 'MMMM':
                result [i] = mmmmArr[mnthNum];
                break;
            case 'd':
                result[i] = String(dateNum);
                break;
            case 'dd':
                result[i] = getZeroDigits(dateNum, 2);
                break;
            case 'E':
                result[i] = eArr[dayNum];
                break;
            case 'EEEE':
                result[i] = eeeeArr[dayNum];
                break;
            case 'H':
                result[i] = String(hourNum);
                break;
            case 'HH':
                result[i] = getZeroDigits(hourNum, 2);
                break;
            case 'h':
                result[i] = String((hourNum > 12) ? hourNum-12: hourNum);
                break;
            case 'hh':
                result[i] = getZeroDigits((hourNum > 12) ? hourNum-12: hourNum, 2);
                break;
            case 'm':
                result[i] = String(minNum);
                break;
            case 'mm':
                result[i] = getZeroDigits(minNum, 2);
                break;
            case 's':
                result[i] = String(secNum);
                break;
            case 'ss':
                result[i] = getZeroDigits(secNum, 2);
                break;
            case 'a':
                result[i] = peroid;
                break;
        }
    };

    return result.join('');
};


const landing = new Date('July 20, 1969, 20:17:40')
const returning = new Date('July 21, 1969, 17:54:12')
const eclipse = new Date(-585, 4, 28)
const ending = new Date('2 September 1945, 9:02:14')

// year
console.log(format(eclipse, 'y')) //, '585'))
console.log(format(landing, 'y')) //, '1969'))
console.log(format(eclipse, 'yyyy')) //, '0585'))
console.log(format(landing, 'yyyy')) //, '1969'))
console.log(format(eclipse, 'yyyy G')) //, '0585 BC'))
console.log(format(landing, 'yyyy G')) //, '1969 AD'))
console.log(format(eclipse, 'yyyy GGGG')) //, '0585 Before Christ'))
console.log(format(landing, 'yyyy GGGG')) //, '1969 Anno Domini'))

// month
console.log(format(eclipse, 'M')) //, '5'))
console.log(format(eclipse, 'MM')) //, '05'))
console.log(format(eclipse, 'MMM')) //, 'May'))
console.log(format(eclipse, 'MMMM')) //, 'May'))
console.log(format(landing, 'M')) //, '7'))
console.log(format(landing, 'MM')) //, '07'))
console.log(format(landing, 'MMM')) //, 'Jul'))
console.log(format(landing, 'MMMM')) //, 'July'))
console.log(format(ending, 'M')) //, '9'))
console.log(format(ending, 'MM')) //, '09'))
console.log(format(ending, 'MMM')) //, 'Sep'))
console.log(format(ending, 'MMMM')) //, 'September'))

// day
console.log(format(landing, 'd')) //, '20'))
console.log(format(ending, 'd')) //, '2'))
console.log(format(landing, 'dd')) //, '20'))
console.log(format(ending, 'dd')) //, '02'))
console.log(format(landing, 'E')) //, 'Sun'))
console.log(format(returning, 'E')) //, 'Mon'))
console.log(format(landing, 'EEEE')) //, 'Sunday'))
console.log(format(returning, 'EEEE')) //, 'Monday'))

// time
console.log(format(landing, 'H:m:s')) //, '20:17:40'))
console.log(format(landing, 'HH:mm:ss')) //, '20:17:40'))
console.log(format(landing, 'h:m:s a')) //, '8:17:40 PM'))
console.log(format(landing, 'hh:mm:ss a')) //, '08:17:40 PM'))
console.log(format(returning, 'H:m:s')) //, '17:54:12'))
console.log(format(returning, 'HH:mm:ss')) //, '17:54:12'))
console.log(format(returning, 'h:m:s a')) //, '5:54:12 PM'))
console.log(format(returning, 'hh:mm:ss a')) //, '05:54:12 PM'))
console.log(format(ending, 'H:m:s')) //, '9:2:14'))
console.log(format(ending, 'HH:mm:ss')) //, '09:02:14'))
console.log(format(ending, 'h:m:s a')) //, '9:2:14 AM'))
console.log(format(ending, 'hh:mm:ss a')) //, '09:02:14 AM'))

// mix
console.log(format(ending, 'HH(mm)ss [dd] <MMM>')) //, '09(02)14 [02] <Sep>'))
console.log(format(ending, 'dd/MM/yyyy')) //, '02/09/1945'))
