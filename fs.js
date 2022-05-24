const {readFileSync,writeFileSync}=require('fs');
const one=readFileSync('./content/three.txt','utf8');
const before=readFileSync('./content/subfolder/text.txt','utf8');

writeFileSync('./content/subfolder/text.txt','over write the exsisting text');
const before_Append=readFileSync('./content/subfolder/text.txt','utf8');
writeFileSync('./content/subfolder/text.txt','use flag to append instead',{flag:'a'});
const  after=readFileSync('./content/subfolder/text.txt','utf8');
console.log(before,before_Append,after);