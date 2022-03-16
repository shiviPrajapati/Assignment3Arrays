const items = [1, 2, 3, 4, 5, 5];
const result = require('../map.js');  

let getMappedArray=[];

function getMap( items, cb){
    getMappedArray = result(items,cb);
    printMap();
}

function printMap(){
    console.log( getMappedArray);
}

cb = ( x, i, arr) => x*2;
getMap( items, cb);

cb = ( x, i, arr) => x*x;
getMap( items, cb);
