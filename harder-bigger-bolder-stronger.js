export function generateLetters(){
    const body = document.body;
    const count = 120;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const initFontSize = 11;
    const fontWeight = ['300', '400', '600'];

    for (let i = 0; i < count; i++){
        const ele = document.createElement('div');
        ele.textContent = alphabet[Math.floor(Math.random()*26)];
        ele.style.fontSize = (initFontSize + i + 'px');
        ele.style.fontWeight = fontWeight[i%40];
        body.appendChild(ele);
    }
}