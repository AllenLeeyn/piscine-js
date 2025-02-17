const dayOfTheYear = (date) => {
    const dayTime = 1000 * 60 * 60 * 24;    
    let yearNum = date.getFullYear();
    if (yearNum < 10) {
        yearNum = '000' + yearNum
    } else if (yearNum < 100) {
        yearNum = '00' + yearNum
    } else if (yearNum < 1000) {
        yearNum = '0' + yearNum
    };
    const year = new Date(yearNum+'-01-01');
    
    const numOfDaysInMSec = Number(date) - Number(year);
    return Math.floor(numOfDaysInMSec/dayTime)+1;
};
