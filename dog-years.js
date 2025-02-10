const secondsInYear = 31557600;
const planetYear = {
    'earth': 1,
    'mercury': 0.24,
    'venus': 0.61,
    'mars': 1.88,
    'jupiter': 11.86,
    'saturn': 29.44,
    'uranus': 84.01,
    'neptune': 164.79
};

const dogYears = (planetName, dogAgeSecs) => {
    let result = (dogAgeSecs/secondsInYear) * planetYear[planetName] * 7;
    return Math.round(result * 100) / 100;
};
