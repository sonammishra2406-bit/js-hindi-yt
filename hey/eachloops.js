const arr=["Sonam","Mishra","Student"]
for(const val of arr){
    console.log`Values of array are ${val}`
}
const greetings = "Hello Worls !"
for(const greets of greetings){
    console.log(greets)
}
const map= new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('US', "United States")
map.set('In', "India")
console.log(map)
for(const val of map){
    console.log(val)
}
//OBJECTS CANT BE WRITTEN IN TERMS OF For of loop they can be written in for in loop
// arrays and rest can also be written in for in loops but map cant as its non iteratable
const object={
    name : "Sonam",
    age : 19,
}
for(const val in object){
    console.log(val)                         // only name and age got printed so
    console.log(object[val])                  // arrays can also be printed in the same way
}
// callback functions
const lang =["js","Cpp","java","ruby"]            // in terms of arrow function .... lang.forEach((item)=>{console.log(item)})
lang.forEach(function (val, index){                           
    console.log(val,index)
})
const coding = [
    {
        langname: "Java",
        days: 30 
    },
    {
        langname:"Cpp",
        days : 45
    }
]
coding.forEach((val)=>{
    console.log(val.langname)
})