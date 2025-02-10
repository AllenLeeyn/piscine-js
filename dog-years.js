const secondsInYear = 31557600;
const planetYear = {
    'earth': 1,
    'mecury': 0.2408467,
    'venus': 0.61519736,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
};

const dogYears = (planetName, dogAgeSecs) => (dogAgeSecs/secondsInYear) * planetYear[planetName] * 7;

console.log(dogYears('earth', 1000000000));