const matchCron = (cron, date) => {
    cron = cron.split(' ');
    if (cron.length !== 5) return false;

    const cronCheck = [
        [0, 59],
        [0, 23],
        [1, 31],
        [1, 12],
        [1, 7],
    ];

    for (let i = 0; i < cron.length; i++){
        if (cron[i] === '*') continue;
        if (cron[i] < cronCheck[i][0] || cron[i] > cronCheck[i][1]) return false;
    };

    const dateParam = [];
    dateParam.push(date.getMinutes());
    dateParam.push(date.getHours());
    dateParam.push(date.getDate());
    dateParam.push(date.getMonth()+1);
    dateParam.push(date.getDay());
    dateParam[4] = (dateParam[4] === 0) ? 7: dateParam[4];

    for (let i = 0; i < cron.length; i++){
        if (cron[i] === '*') continue;
        if (Number(cron[i]) !== dateParam[i]) return false;
    };
    return true;
};
