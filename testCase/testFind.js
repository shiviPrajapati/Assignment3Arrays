const items = [1, 2, 3, 4, 5, 5];
const callFind = require('../find.js');  

let found;
function findValue(items, cb){
    found = callFind(items,cb);
    printFindValue();
}

function printFindValue(){
    if(found === undefined){
        console.log("value not found");
    }
    else{
        console.log(found);      
    }
}

cb = (x) => x===5 ? true : false;
findValue(items, cb);

cb = (x) => x===9 ? true : false;
findValue(items, cb);
