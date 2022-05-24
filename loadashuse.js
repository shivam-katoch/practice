const lod=require('lodash');
const i=[1,[2,3[3,4],[1,[3,9,[9,8,9,0,[9]]]]][3,3,3]];
const ni=flattenDeep(i);
console.log(ni);