const month = "Jan"   //month = 3
switch(month){
    case "Jan":       //case 1:
        console.log("Jan")
        break;
    case "Feb":
        console.log("Feb")
}

//   ***Conditions whats true and whats false 
//Falsy values
// false, 0, -0,Bigint, 0n,"", null, undefined, NaN
// Truthy values
//"0"," ",[],'False',{}, function(){},             so to check array use length property
const userEmail=[]
if(userEmail.length===0){
console.log("No value")
}
const obj={}
if (Object.keys(obj).length ===0){
    console.log("Empty object")
}
// false ==0 --> true, false == ''  -->true, 0== '' --> true
//Nullish coaleseing Operator
let val1
val1= null?? 10??20        
val2= undefined ?? 5           
console.log (val1)
console.log(val2)
 
//Terniary Operator
// condition ? true : false 
const price = 50
price> 10 ? console.log("Cheap")  : console.log("Expensive")