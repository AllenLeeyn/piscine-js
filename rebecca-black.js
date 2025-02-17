const isValid = (date) => {
    if (typeof date === 'string' && date !== '') return false;
    date = new Date(date);
    if (date.toString() === 'Invalid Date') return false;
    return true
};

const isFriday = (date) => {
    if (!isValid(date))return false;
    return (date.getDay() === 5) ? true: false;
};

const isWeekend = (date) => {
    if (!isValid(date))return false;
    return (date.getDay() === 6 || date.getDay() === 0) ? true: false;
};
const isLeapYear = (date) => {
    if (!isValid(date))return false;
    return (date.getFullYear()%4 === 0) ? true: false;
};

const isLastDayOfMonth = (date) => {
    if (!isValid(date))return false;
    const day = date.getDate();
    const month = date.getMonth();
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
        if (day === 31) {return true} else {return false};
    };
    if (month === 1) {
        if (isLeapYear(date)) {
            if (day === 29) {return true} else {return false};
        } else {
            if (day === 28) {return true} else {return false};
        };
    };
    if (day === 30) {return true} else {return false};
};
