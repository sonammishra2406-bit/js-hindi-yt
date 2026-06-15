//datatypes:
//1. Primitive(7 types)= strings, number, BigInt, Boolean, null,undefined , symbol
const score=100.3
let email;
const isLoggedIn= false;
//const Id= symbol('123')
//const Userid= symbol('123')
//console.log(Id==Userid)-->false
let bigNumber= 12345678n

//Reference (non primitive)
//array,objects, functions
let arr=["sonam", "Mishra"]
let obj={
    name: "sonam",
    class:2,
}
let func=function(){
    console.log("Hello World");
}

console.log(typeof func)
