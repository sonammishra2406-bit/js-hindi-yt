if(2==2){
    console.log("Executed")
}
if(2==='2'){
    console.log("Executed")
}
const score =1000
if ( score > 500){
    var power= "High"
    console.log(score)
}
else if(score < 2000){
    console.log("Low")
}
console.log (power)    //var works outside the scope
const userloggedin= true
const debitcard = true
const emailid= true
const googleacc= false
if(userloggedin && debitcard && 2==3){
    console.log("Yes allowed")
}
if(emailid || googleacc){
    console.log("Accepted")
}