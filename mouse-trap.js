export function createCircle(){
    document.addEventListener('click',(event) =>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('circle');
        newDiv.style.left = event.clientX-25+'px';
        newDiv.style.top = event.clientY-25+'px';
        newDiv.style.background = 'white';
        document.body.appendChild(newDiv);
    });
};

export function moveCircle(){
    const box = document.getElementById('box');
    const bBox = box.getBoundingClientRect();
    console.log(bBox);
    document.addEventListener('mousemove',(event) =>{
        const curCircle = document.body.lastChild;
        if (!curCircle.classList.contains('circle')) return;
        if ((event.clientX-26 > bBox.left && event.clientX+26 < bBox.right) && 
        (event.clientY-26 > bBox.top && event.clientY+26 < bBox.bottom)){
            curCircle.style.background = 'var(--purple)';
        };

        if (curCircle.style.background === 'var(--purple)'){
            if (event.clientX-26 > bBox.left && event.clientX+26 < bBox.right) {
                curCircle.style.left = event.clientX-25+'px';
            } 
            if (event.clientY-26 > bBox.top && event.clientY+26 < bBox.bottom) {
                curCircle.style.top = event.clientY-25+'px';
            }
        } else {
            curCircle.style.left = event.clientX-25+'px';
            curCircle.style.top = event.clientY-25+'px';
        }
    });
};

export function setBox(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.id = 'box';
    document.body.appendChild(newDiv);
};
