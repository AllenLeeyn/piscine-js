const isValid = (date) => {
    if (typeof date === 'string' && date !== '') return false;
    date = new Date(date);
    if (date.toString() === 'Invalid Date') return false;
    return true
};

const isAfter = (date, dateToCompare) => {
    if (!isValid(date) || !isValid(dateToCompare)) return false;
    if (date > dateToCompare) return true;
    return false;
};

const isBefore = (date, dateToCompare) => {
    if (!isValid(date) || !isValid(dateToCompare)) return false;
    if (date < dateToCompare) return true;
    return false;
};

const isFuture = (date) => isAfter(date, new Date());
const isPast = (date) => isBefore(date, new Date());
