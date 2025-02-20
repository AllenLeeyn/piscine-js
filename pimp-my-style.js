import {styles} from './pimp-my-style.data.js'
const count = styles.length;
let curCount = 0;

export function pimp(){
    const btn = document.getElementsByClassName('button')[0]
    let isPimp = ((Math.floor(curCount/count))%2) === 0
    if (isPimp){
        btn.classList.add(styles[curCount%count]);
        if ((curCount%count) === count-1) btn.classList.add('unpimp');
    } else {
        btn.classList.remove(styles[count-1-(curCount%count)]);
        if ((curCount%count) === count-1) btn.classList.remove('unpimp');
    };
    curCount++;
};