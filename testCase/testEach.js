const items = [1, 2, 3, 4, 5, 5];
const callEach = require('../each.js');  

callEach(items,cb=(x, i, arr) => x+2);
