function reduce(elements, cb, startingValue) {
  let index = startingValue || 0;
  let reducedValue = elements[index];
  for ( let i = index+1; i < elements.length; ++i ) {
    reducedValue = cb(reducedValue, elements[i]);
  }

  return reducedValue;

}
module.exports =reduce;
