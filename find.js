function find(elements, cb) {
    let found = undefined;
    for ( let i = 0; i < elements.length; i++) {
        if(cb(elements[i], i, elements)){
           found = elements[i] ; 
        }
    }

    return found;
}

module.exports = find;



