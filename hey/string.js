const name= "Sonam"
const value = 1
console.log('My name is ${name} and i am number ${value}')
const game= new String("Sonam-hc")
console.log(game[0])
console.log(game.__proto__)//two times _
console.log(game.length)
console.log(game.toUpperCase)
console.log(game.toLowerCase)
console.log(game.charAt(2))
console.log(game.indexOf('o'))
console.log(game.split('-'))
const newstring = game.substring(-7,4)//4 not included
console.log(newstring)
const another = game.slice(-7,4)
console.log(another)
const h= "    sonam    "
console.log(h)
console.log(h.trim())
const url="https://sonam.com/sonam%20mishra"
console.log(url.replace('%20', ' '))
console.log(url.includes('sonam'))
/*n
1
['Sonam','hc']     Sona      ona         sonam   sonam     https://sonam.com/sonam mishra     true*/