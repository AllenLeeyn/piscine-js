const cirRad = 25;
let bBoxLft = 0, bBoxRgt = 0, bBoxTop = 0, bBoxBot = 0;

export function createCircle(){
    document.addEventListener('click',(e) =>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('circle');
        newDiv.style.left = e.clientX-cirRad+'px';
        newDiv.style.top = e.clientY-cirRad+'px';
        newDiv.style.background = 'white';
        if ((e.clientX-(cirRad+1) > bBoxLft && e.clientX+(cirRad+1) < bBoxRgt) && 
        (e.clientY-(cirRad+1) > bBoxTop && e.clientY+(cirRad+1) < bBoxBot)){
            newDiv.style.background = 'var(--purple)';
        };
        document.body.appendChild(newDiv);
    });
};

export function moveCircle(){
    document.addEventListener('mousemove',(e) =>{
        const curCircle = document.body.lastChild;
        if (!curCircle.classList.contains('circle')) return;
        const isInsideX = e.clientX-(cirRad) > bBoxLft && e.clientX+(cirRad) < bBoxRgt;
        const isInsideY = e.clientY-(cirRad) > bBoxTop && e.clientY+(cirRad) < bBoxBot;
        const isInside = isInsideX && isInsideY;

        if (isInside){
            curCircle.style.background = 'var(--purple)';
        };

        if (curCircle.style.background === 'var(--purple)'){
            if (isInsideX) {
                curCircle.style.left = e.clientX-cirRad+'px';
            } 
            if (isInsideY) {
                curCircle.style.top = e.clientY-cirRad+'px';
            }
        } else {
            curCircle.style.left = e.clientX-cirRad+'px';
            curCircle.style.top = e.clientY-cirRad+'px';
        }
    });
};

export function setBox(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    document.body.appendChild(newDiv);
    const bBox = newDiv.getBoundingClientRect();
    bBoxLft = bBox.left; 
    bBoxRgt = bBox.right;
    bBoxTop = bBox.top;
    bBoxBot = bBox.bottom;
};
