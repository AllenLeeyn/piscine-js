export function pick(){
    const body = document.body;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100vw');
    svg.setAttribute('height', '100vh');
    body.appendChild(svg);

    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.id = 'axisX';
    svg.appendChild(xAxis);
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.id = 'axisY';
    svg.appendChild(yAxis);

    const hueDiv = document.createElement('div');
    hueDiv.classList.add('hue');
    hueDiv.classList.add('text');
    body.appendChild(hueDiv);

    const hslDiv = document.createElement('div');
    hslDiv.classList.add('hsl');
    body.appendChild(hslDiv);

    const lumiDiv = document.createElement('div');
    lumiDiv.classList.add('luminosity');
    lumiDiv.classList.add('text');
    body.appendChild(lumiDiv);

    let hue = 0, lumi = 0;

    document.addEventListener('mousemove',(e) =>{
        yAxis.setAttribute('x1', 0);
        yAxis.setAttribute('y1', e.clientY);
        yAxis.setAttribute('x2', window.innerWidth);
        yAxis.setAttribute('y2', e.clientY);

        xAxis.setAttribute('x1', e.clientX);
        xAxis.setAttribute('y1', 0);
        xAxis.setAttribute('x2', e.clientX);
        xAxis.setAttribute('y2', window.innerHeight);

        hue = Math.round(e.clientX/window.innerWidth*360);
        lumi = Math.round(e.clientY/window.innerHeight*100);
        const col = `hsl(${hue}, 50%, ${lumi}%)`
        body.style.background = col;
    
        hslDiv.textContent = col;
        hueDiv.textContent = 'hue\n'+hue;
        lumiDiv.textContent = lumi+'\nluminosity';
    });

    document.addEventListener('click', (e)=>{
        hue = Math.round(e.clientX/window.innerWidth*360);
        lumi = Math.round(e.clientY/window.innerHeight*100);
        navigator.clipboard.writeText('hsl('+hue+', 50%, '+lumi+'%)');
    });
};