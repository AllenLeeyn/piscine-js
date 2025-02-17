const sunnySunday = (date) => {
    const epoch = new Date('0001-01-01')
    const dayTime = 1000 * 60 * 60 * 24;
    const weekDay = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    date = date - epoch;
    const numOfDays = Number(date)/dayTime;
    const dayOfWk = numOfDays%6;
    console.log(weekDay[dayOfWk]);
    return weekDay[dayOfWk];
};