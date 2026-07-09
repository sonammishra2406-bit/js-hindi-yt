function add(numb1,numb2){
   return numb1+numb2   //return doesnt print
}
let a= add (3,2)
console.log(a)
/*function user(username ){
return `${username} logged in`
}*/
function user(username){
    if( username==undefined){
        console.log("add ur name")
        return 
    }
    else{
    return `${username} logged in`
    }
}
console.log(user("Sonam"))
console.log(user())
function calculate(num1,num2,...val){
    return val
}
console.log(calculate(200,400,500, 700))
const ab ={
    name: "SM",
    price: 500,
}
function connectobj(anyObject){
    console.log(`${anyObject.name} has a sum of ${anyObject.price} rupees`)
}
connectobj(ab)

/*method2 
connectobj({
name: "Sonam",
price: 500,
})*/