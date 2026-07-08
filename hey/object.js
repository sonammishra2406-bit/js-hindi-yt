const mySym= Symbol( "key")
const user = {
   "full name": "Sonam",
    nums : 1,
    isLog: false,
    email: "sonammishra2406@google.com",
[mySym]: "Key2"
}
console.log( user.email)
console.log(user["full name"])
console.log(user [mySym])
user.email = "Sonammmm@gpt.com"
//Object.freeze(user)
user.email =" Mishra@chatgpt.com"
console.log(user)
user.greeting= function(){
    console.log(`Hello user, ${this.nums}`);
}
console.log(user.greeting())