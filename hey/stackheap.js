//primitive--> stores in stack
let user="Sonam"
let another= user
another="Mishra"
console.log(user)
console.log(another)

//non primitive-->heap
let obj= {
    name:"Sonam"
}
let ano= obj //ano is stack
ano.name= "mishra"
console.log(obj)
console.log(ano)