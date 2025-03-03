import fs from 'fs/promises';
import path from 'path';

const DIRECTORY = process.argv[2];
const FILENAME = process.argv[3];

const drink = {
    'iced-tea' : ['iced-tea-bottles'],
    'water': ['water-bottles'],
    'sparkling-water': ['sparkling-water-bottles'],
    'soft': ['soft-bottles']
};

const food = {
    'fish' : ['sardines'],
    'everything': ['kebabs'],
    'vegan': ['eggplants', 'mushrooms', 'hummus', 'courgettes'],
    'veggie': ['eggplants', 'mushrooms', 'hummus', 'courgettes'],
    'carnivore': ['burgers']
};

const ratio = {
    'iced-tea-bottles': 6,
    'water-bottles': 4,
    'sparkling-water-bottles': 4,
    'soft-bottles': 4,
    'sardines': 1,
    'burgers': 1,
    'kebabs': 1,
    'potatoes': 1,
    'mushrooms': 1,
    'eggplants': 3,
    'hummus': 3,
    'courgettes': 3
}

const newList = {
    'iced-tea-bottles': 0,
    'water-bottles': 0,
    'sparkling-water-bottles': 0,
    'soft-bottles': 0,
    'sardines': 0,
    'burgers': 0,
    'kebabs': 0,
    'potatoes': 0,
    'mushrooms': 0,
    'eggplants': 0,
    'hummus': 0,
    'courgettes': 0
};

const keys = Object.keys(newList);

const ensureFileExist = async (file) => {
    try {
        await fs.access(file, fs.constants.F_OK);
    } catch (err) {
        await fs.writeFile(file, '{}', 'utf8');
    };
};

const readFile = async (file) => {
    try {
        const list = await fs.readFile(file, 'utf8');
        return JSON.parse(list);
    } catch (err) {
        console.error('Error:', err);
    };
};

const readDir = async (dir) => {
    try {
        return await fs.readdir(dir, 'utf8');
    } catch (err) {
        console.error('Error:', err);
    };
};

const getVipGuests = async (guestList) => {
    const vipGuests = [];
    for (const guest of guestList) {
        const vipGuest = await readFile(path.join(DIRECTORY, `${guest}`));
        
        if (vipGuest.answer === 'yes') {
            vipGuests.push(vipGuest);
        }
    }
    return vipGuests
};

const updateList = (guest) => {
    for (const [k, v] of Object.entries(guest)) {
        if (k === 'food') newList[food[v]] += 1;
        if (k === 'drink') newList[drink[v]] += 1;
    }
};

const updateListForShopping = () =>{
    for (const [k, v] of Object.entries(newList)){
        if (v === 0 || !keys.includes(k)) continue;
        newList[k] = Math.ceil(v/ratio[k]);
    }
};

const saveList = async () => {
    await ensureFileExist(FILENAME);
    const bbqList = await readFile(FILENAME);

    for (const [k, v] of Object.entries(newList)){
        bbqList[k] = v;
    }
    await fs.writeFile(FILENAME, JSON.stringify(bbqList), 'utf8');
};

const main = async () => {
    try{
        const guestList = await readDir(DIRECTORY);
        const vipList = await getVipGuests(guestList);
        if (vipList.length === 0) {
            return console.log('No one is coming')
        } else {
            newList.potatoes = vipList.length;
            vipList.forEach(updateList);
            updateListForShopping();
            await saveList();
        }
    } catch (err) {
        console.log(err);
    };
};

main();