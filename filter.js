function filter(elements, cb) {
    let filtered =[];
    for ( let index=0; index< elements.length; index++ ){
      cb(elements[index], index, elements) ? filtered.push(elements[index]) : null;
    }
    return filtered;
  }
  module.exports = filter;
