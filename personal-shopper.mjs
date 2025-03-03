import fs from 'fs/promises';
const FILENAME = process.argv[2];

const keyword = process.argv[3];
const item = process.argv[4];
let qty = Number(process.argv[5]);


if (keyword === 'create') {
    const data = JSON.stringify({});
    fs.writeFile(FILENAME, data, 'utf8');
};

if (keyword === 'delete') {
    fs.rm(FILENAME);
};


if (keyword === 'add') {
    if (!item) {
        console.error('No elem specified.')
    } else  {
        if (!qty || isNaN(qty)) qty = 1;
        try {
            const list = await fs.readFile(FILENAME, 'utf8');
            const listObj = JSON.parse(list);
            if (!listObj[item]) {
                listObj[item] = qty;
            } else {
                listObj[item] += qty;
            };
            if (listObj[item] <= 0){
                delete listObj[item];
            };
            await fs.writeFile(FILENAME, JSON.stringify(listObj), 'utf8');
    
        } catch (err) {
            console.error('Error adding item to JSON:', err);
        }
    };
};

if (keyword === 'rm') {
    if (!item) {
        console.error('No elem specified.')
    } else {
        try {
            const list = await fs.readFile(FILENAME, 'utf8');
            const listObj = JSON.parse(list);

            if (!isNaN(qty) && process.argv[5] !== undefined) {
                if (!process.argv[5]) ;
                if (listObj[item] && qty > 0) {
                    listObj[item] -= qty;
                };
                if (qty < 0){
                    if (!listObj[item]) {
                        console.log(-qty)
                        listObj[item] = -qty;
                    } else {
                        listObj[item] += -qty;
                    };
                };
            } 
            if ((isNaN(qty) && process.argv.length < 6) || listObj[item] <= 0) {
                delete listObj[item];
            };
            await fs.writeFile(FILENAME, JSON.stringify(listObj), 'utf8');
    
        } catch (err) {
            console.error('Error adding item to JSON:', err);
        }
    };
};

if (keyword === 'help') {
    console.log('Commands');
    console.log('- <filename.json> create: takes a filename as argument and create it');
    console.log('- <filename.json> delete: takes a filename as argument and delete it');
    console.log('- <filename.json> add <item> || <quantity>: increase the quantity of an item. Negative number will treated as rm');
    console.log('- <filename.json> rm <item> || <quantity>: decrease the quantity of an item. Negative number will treated as add');
    console.log('- <filename.json> ls: list the items and quantities in the list');
    console.log('- help: list the commands and it usage');
};

if (keyword === 'ls' || keyword === undefined) {
    const list = await fs.readFile(FILENAME, 'utf8');
    const listObj = JSON.parse(list);

    for (const [k, v] of Object.entries(listObj)){
        console.log(`- ${k} (${v})`);
    };

    if (Object.keys(listObj).length === 0) console.log(`Empty list.`);
};
