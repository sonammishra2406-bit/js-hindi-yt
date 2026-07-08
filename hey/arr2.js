const hero=["me", "myself"]
const anotherhero=["abc"]
hero.push(anotherhero)
console.log(hero)
console.log(hero[2][0])
const hi= hero.concat(anotherhero)
console.log(hi)
const a=[...hero, ...anotherhero]
console.log(a)
const b= [1,2[3,4],6,7,[9,0,[2,1]]]
const c= b.flat(Infinity)
console.log(c)
console.log(Array.isArray("Sonam"))
console.log(Array.from("Sonam"))
console.log(Array.from({name:"Sonam"}))//interesting
let sc1=100
let sc2= 120
let sc3= 200
console.log(Array.of(sc1,sc2,sc3))