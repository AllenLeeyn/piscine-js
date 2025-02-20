export function compose(){
    document.addEventListener('keydown', (event) =>{
        if (event.key === 'Backspace'){
            document.body.removeChild(document.body.lastChild);
            return;
        }
        if (event.key === 'Escape'){
            document.body.innerHTML = '';
            return;
        }

        const keyCode = event.key.charCodeAt(0);
        let col = keyCode % 256;
        if (col <10) {
            col = '00' +col
        } else if (col <100) col = '0' +col;

        const newDiv = document.createElement('div');
        newDiv.classList.add('note')
        newDiv.textContent = event.key;
        newDiv.style.background = `#${col}`;
        document.body.appendChild(newDiv);
    });
};