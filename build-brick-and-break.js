
export function build(n){
    const body = document.body;
    let brickID = 1;

    const intervalID = setInterval(()=>{
        if (brickID > n-1) clearInterval(intervalID);

        const brick = document.createElement('div');
        brick.id = 'brick-' + brickID;
        brick.textContent = brickID;
        if (brickID%3 == 2) brick.setAttribute('data-foundation', true);
        body.appendChild(brick)
        brickID++;
    },100);

};
export function repair(...ids){
    ids.forEach((id)=>{
        const target = document.getElementById(id);
        if (target.hasAttribute('data-foundation')){
            target.setAttribute('data-repaired', 'in progress');
        } else {
            target.setAttribute('data-repaired', true);
        };
    });
};

export function destroy(){
    const body = document.body;
    const lastBrick = body.lastElementChild;
    
    if (lastBrick) {
        body.removeChild(lastBrick);
    }
};