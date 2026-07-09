const user ={
    username : "Sonam",
    class: 5,
    welcome :function (){
        console.log(`${this.username} is the great`)   //this can be used for objects only not function
        console.log(this)
    }
}
user.welcome()
user.username="Shilpa"
user.welcome()
console.log(this)




//eg using this on object
function chai(){
    let username = "Sona"
    console.log(this.username)    //console.log(this)--> v v huge data
}
chai()



//ARROW FUNCTION --> Remove function word and add => after paranthesis

const abc = () => {
    let name = "Sonam"
    console.log(this.name)
    console.log(this)
}
//implicit 
const add= (num1, num2)=> (num1 + num2)
console.log( add(2,3))
const ad= (num1,num2)=> {
    let username= "Sonam"
    console.log(this.username)
}
console.log(ad())