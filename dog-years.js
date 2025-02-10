const secondsInYear = 31557600;
const planetYear = {
    'earth': 1,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808156,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
};

const dogYears = (planetName, dogAgeSecs) => {
    let result = (dogAgeSecs/secondsInYear) / planetYear[planetName] * 7;
    return Math.round(result * 100) / 100;
};

console.log(dogYears('mercury', 2134835688));