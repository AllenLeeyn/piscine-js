const addWeek = (date) => {
    const weekDay = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'secondMonday',
        'secondTuesday',
        'secondWednesday',
        'secondThursday',
        'secondFriday',
        'secondSaturday',
        'secondSunday',
    ]
    const epoch = Number(new Date('0001-01-01'))/86400000;
    const dayNum = (Number(date))/86400000 - epoch;
    return weekDay[dayNum%14];
};

const timeTravel = (dateObj) => {
    let date = dateObj.date;
    date.setHours(dateObj.hour, dateObj.minute, dateObj.second);
    return date;
};
