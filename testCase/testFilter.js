const items = [1, 2, 3, 4, 5, 5];
const callFilter = require('../filter.js');  

let filteredArray = [];
function getFilterArray(items, cb){
   filteredArray = callFilter(items,cb);
   printFilterArray();
}

function printFilterArray(){
   console.log( filteredArray);
}

cb = (x) => x>3 ? true : false;
getFilterArray(items, cb);

cb = (x) => x<3 ? true : false;
getFilterArray(items, cb);