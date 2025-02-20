import {colors} from './fifty-shades-of-cold.data.js';
const head = document.head;

export function generateClasses(){
    const container = document.createElement('style');
    colors.forEach((color) => container.innerHTML+=`.${color} {background: ${color};}\n`);
    head.appendChild(container);
};

export function generateColdShades(){
    colors.forEach((color) => {
        if (/(aqua|blue|turquoise|green|cyan|navy|purple)/.test(color)){
            const newDiv = document.createElement('div');
            newDiv.classList.add(color);
            newDiv.textContent = color
            document.body.appendChild(newDiv);
        };
    });
};

export function choseShade(color){
    const elements = Array.from(document.getElementsByTagName('div'))
    elements.forEach((ele) => {ele.classList = color});
};