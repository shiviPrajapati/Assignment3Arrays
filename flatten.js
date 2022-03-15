function flatten(elements) {
  let toFlat = [];
  
  function pushArrayElement ( item ) {
    Array.isArray( item ) ? checkItems(item) : toFlat.push(item); 
  }
  
  function checkItems ( array ) {
    for ( let index=0; index < array.length; index++ ) {
      // console.log(item);
      pushArrayElement( array[index] );
    }
  }

  checkItems(elements);
  return toFlat;
}

module.exports = flatten;
