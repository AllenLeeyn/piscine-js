const firstDayWeek = (wkNum, yrStr) => {
    if (wkNum < 1 && wkNum > 53) return;
    let date = new Date(yrStr);
    const dayTime = 1000 * 60 * 60 * 24;
    const wkTime = dayTime * 7;

    const wkOffset = (wkNum - 1) * wkTime;
    date = new Date(Number(date) + wkOffset);

    let dayOffset = (date.getDay()-1) * dayTime;
    if (dayOffset < 0) dayOffset = wkTime+dayOffset;
    date = new Date(Number(date) - dayOffset);
    
    if (date.getFullYear() !== Number(yrStr)) date = new Date(yrStr);

    const dateNum = (date.getDate() < 10) ? '0'+date.getDate() : String(date.getDate());
    const monthNum = (date.getMonth()+1 < 10) ? '0'+(date.getMonth()+1) : String(date.getMonth()+1);
    let yearNum = date.getFullYear();
    if (yearNum < 10) {
        yearNum = '000' + yearNum
    } else if (yearNum < 100) {
        yearNum = '00' + yearNum
    } else if (yearNum < 1000) {
        yearNum = '0' + yearNum
    };
    return (dateNum + '-' + monthNum + '-' + yearNum);
};
