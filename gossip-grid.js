import { gossips } from "./gossip-grid.data.js";

export function grid(){
    const body = document.body;

    const rangeDiv = document.createElement('div');
    rangeDiv.className = 'ranges';
    body.appendChild(rangeDiv);

    const widthLabel = document.createElement('label');
    widthLabel.className = 'range';
    widthLabel.textContent = 'width';
    rangeDiv.appendChild(widthLabel);
    const widthRng = document.createElement('input');
    widthRng.id = 'width';
    widthRng.className = 'range';
    widthRng.type = 'range';
    widthRng.min = 200;
    widthRng.max = 800;
    widthRng.value = 250;
    rangeDiv.appendChild(widthRng);
    const widthSpan = document.createElement('span');
    widthSpan.className = 'range';
    widthSpan.textContent = `250`;
    rangeDiv.appendChild(widthSpan);

    widthRng.addEventListener('input', function() {
        widthSpan.textContent = `${widthRng.value}`;
        const gossipCards = Array.from(document.getElementsByClassName('gossip'));
        gossipCards.forEach(el => {el.style.width = `${widthRng.value}px`});
    });

    const fontSizeLabel = document.createElement('label');
    fontSizeLabel.className = 'range';
    fontSizeLabel.textContent = 'fontSize';
    rangeDiv.appendChild(fontSizeLabel);
    const fontSizeRng = document.createElement('input');
    fontSizeRng.id = 'fontSize';
    fontSizeRng.className = 'range';
    fontSizeRng.type = 'range';
    fontSizeRng.min = 20;
    fontSizeRng.max = 40;
    fontSizeRng.value = 20;
    rangeDiv.appendChild(fontSizeRng);
    const fontSizeSpan = document.createElement('span');
    fontSizeSpan.className = 'range';
    fontSizeSpan.textContent = `20`;
    rangeDiv.appendChild(fontSizeSpan);

    fontSizeRng.addEventListener('input', function() {
        fontSizeSpan.textContent = `${fontSizeRng.value}`;
        const gossipCards = Array.from(document.getElementsByClassName('gossip'));
        gossipCards.forEach(el => {el.style.fontSize = `${fontSizeRng.value}px`});
    });

    const bgLabel = document.createElement('label');
    bgLabel.className = 'range';
    bgLabel.textContent = 'background';
    rangeDiv.appendChild(bgLabel);
    const bgRng = document.createElement('input');
    bgRng.id = 'background';
    bgRng.className = 'range';
    bgRng.type = 'range';
    bgRng.min = 20;
    bgRng.max = 75;
    bgRng.value = 50;
    rangeDiv.appendChild(bgRng);
    const bgSpan = document.createElement('span');
    bgSpan.className = 'range';
    bgSpan.textContent = `50`;
    rangeDiv.appendChild(bgSpan);

    bgRng.addEventListener('input', function() {
        bgSpan.textContent = `${bgRng.value}`;
        const gossipCards = Array.from(document.getElementsByClassName('gossip'));
        gossipCards.forEach(el => {el.style.background = `hsl(280, 50%, ${bgRng.value}%)`});
    });

    const formEl = document.createElement('form');
    formEl.classList.add('gossip');
    body.appendChild(formEl);

    const formText = document.createElement('textarea');
    formText.placeholder = 'Got a gossip to share?';
    formEl.appendChild(formText);

    const formSubmit = document.createElement('button');
    formSubmit.textContent = 'Share gossip!';
    formSubmit.type = 'submit';
    formEl.appendChild(formSubmit);


    formEl.addEventListener('submit', function(event) {
        event.preventDefault();
        const el = document.createElement('div');
        el.classList.add('gossip');
        el.textContent = formText.value;
        body.appendChild(el);
        formText.value = '';
    });

    gossips.forEach((g)=>{
        const el = document.createElement('div');
        el.classList.add('gossip');
        el.textContent = g;
        body.appendChild(el);
    });
};