function map(elements, cb){
    let mappedArray=[];
    for(let index=0; index<elements.length; index++){
        mappedArray.push( cb( elements[ index ], index, elements));
    }  
    return mappedArray;
}

module.exports = map;
