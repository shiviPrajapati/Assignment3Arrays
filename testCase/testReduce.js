const items = [1, 2, 3, 4, 5, 5];
const callReduce = require('../reduce.js');  

let reducedValue=[];

function getReduceValue( items, cb, startingValue){
    reducedValue = callReduce( items, cb, startingValue);
    printReduceValue();
}
function printReduceValue(){
    console.log( reducedValue);
}

cb = (reduced, value,index) => reduced += value;
getReduceValue( items, cb, 0);

cb = (reduced, value,index) => reduced += value;
getReduceValue( items, cb, 3);

