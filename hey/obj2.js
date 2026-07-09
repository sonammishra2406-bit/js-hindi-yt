//const user= new Object()
const user={}
user.name = "Shilpa"
user.email= "ss@ggt.com"
console.log(user)
const a= {
    name: {
        first :"Sachin",
        second: "Mishra",
    },
email: "sach@123",
}
//console.log(Object.keys(a))         console.log(Object.values(a))
//console.log(Object.entries(a))
console.log(a.hasOwnProperty('email'))
console.log(a.name?.first)
console.log(a)
const ob1= {1: "a", 2: "b"}
const ob2={ 3: "c",4:"e" }
//const  ob3= { ob1, ob2}
//const ob3= object.assign({}, ob1,ob2)
const ob3= {...ob1,...ob2}
console.log(ob3)
const app= [{
    name : "Hi",
    class: 2,
},
{
    name : "by",
    class: 3,
}]
console.log( app[1].name)