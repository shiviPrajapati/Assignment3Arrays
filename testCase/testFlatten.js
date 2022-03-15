const result = require('../flatten.js');  

const nestedArray1 = [1, [2], [[3]], [[[4]]]]; 
const nestedArray2 = [[[[7]]],[5], 2, [[]], [[[4]]]];
const nestedArray3 = [[[[]]],,[], [[]], [[[]]]];

let flattenArray=[];
function getFlattenArray( nestedArray){
    flattenArray = result( nestedArray);
    printFlattenArray();
}

function printFlattenArray(){
    console.log(flattenArray);
}

getFlattenArray(nestedArray1);
getFlattenArray(nestedArray2);
getFlattenArray(nestedArray3);
