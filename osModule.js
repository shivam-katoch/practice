// //Modules
// const {john,rohnny}=require('./names');
// const {items,singleMan}=require('./aletrnative')
// const SayHi=require('./sayHi');
// // SayHi('shivam');
// // SayHi(john);
// // SayHi(rohnny);
// // console.log(items,singleMan.name);

// // require('./notexportingfunctionjustinvoking infile')
const os=module.require('os');
// const user=os.userInfo();
// console.log(os.uptime());
const CurrentOs={
    Name:os.type(),
    Release:os.release(),
    Memory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(CurrentOs);