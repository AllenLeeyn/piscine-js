import { people } from "./get-them-all.data.js";

const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr);
    };
};

const filter = (arr, fn) => {
    const result = [];
    forEach(arr, (x, i, arr) => (fn(x, i, arr)) ? result.push(x):null);
    return result;
};

const reject = (arr, fn) => {
    const result = [];
    forEach(arr, (x, i, arr) => (!fn(x, i, arr)) ? result.push(x):null);
    return result;
};

export function getArchitects(){
    const body = document.body;
    const aPeople = Array.from(body.getElementsByTagName('a'));
    const notAPeople = Array.from(body.getElementsByTagName('span'));
    return [aPeople,notAPeople];
};

export function getClassical(){
    const [aPeople, _] = getArchitects();
    const classicalPpl = filter(aPeople, (ele) => ele.classList.contains('classical'));
    const notClassicalPpl = reject(aPeople, (ele) => ele.classList.contains('classical'));
    return [classicalPpl, notClassicalPpl];
};

export function getActive(){
    const [classicalPpl, _] = getClassical();
    const activePeople = filter(classicalPpl, (ele) => ele.classList.contains('active'));
    const notActivePeople = reject(classicalPpl, (ele) => ele.classList.contains('active'));
    return [activePeople, notActivePeople];
};

export function getBonannoPisano(){
    const [activePeople, _] = getActive();
    const bPiscano = filter(activePeople, (ele) => ele.id === 'BonannoPisano');
    const notBPiscano = reject(activePeople, (ele) => ele.id === 'BonannoPisano');
    return [bPiscano[0], notBPiscano];
};
