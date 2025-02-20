import {places} from './where-do-we-go.data.js';

places.sort((a, b) =>{
    const aLatitude = a.coordinates.split(' ')[0];
    const bLatitude = b.coordinates.split(' ')[0];

    const aLatDeg = getDegDec(aLatitude);
    const bLatDeg = getDegDec(bLatitude);
    if (aLatDeg > bLatDeg) {
        return 1;
    } else if (aLatDeg < bLatDeg) {
        return -1;
    }
    return 0;
});

function getDegDec(coord){
    const isNeg = /N/.test(coord);
    const digits = coord.match(/\d+\.?\d+/g);
    let degDec = Number(digits[0]);
    degDec = degDec+Number(digits[1])/60;
    degDec = degDec+Number(digits[2])/3600;
    return (isNeg)? -degDec: degDec;
};

export function explore(){
    const body = document.body;

    const compass = document.createElement('div');
    compass.className = 'direction';
    body.appendChild(compass);

    places.forEach((place)=>{
        const el = document.createElement('section');
        let fileName = place.name.split(',')[0];
        fileName = fileName.toLowerCase();
        fileName = fileName.replaceAll(' ', '-');
        el.style.background = 'url(./where-do-we-go_images/'+fileName+'.jpg)';
        el.style.backgroundSize = 'cover';
        body.appendChild(el);

    });

    const tag = document.createElement('a');
    tag.className = 'location';
    body.appendChild(tag);

    let prevY = 0;
    document.addEventListener('scroll', (e)=>{
        if (prevY > window.scrollY) {
            compass.textContent = 'N';
        }else if (prevY < window.scrollY) {
            compass.textContent = 'S';
        }
        prevY = window.scrollY;
        const index = Math.round(window.scrollY/window.innerHeight);
        tag.textContent = places[index].name + '\n' + places[index].coordinates;
        tag.style.color = places[index].color;
        tag.href = 'https://www.google.com/maps/place/'+places[index].coordinates.replaceAll(' ','+');
        tag.target = '_blank';
    });
};