const Array= [1,2,3,4,5]
const Hero=["Shaktiman", "Bheem"]
const myArr= [4,5,6,7]
myArr.push(8)
myArr.push(9)
myArr.pop()
console.log(myArr)
myArr.unshift(0)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(7))
console.log(myArr)//[2,......]
const hi=myArr.join
console.log(hi)//1,2,.....    string
console.log(typeof hi)
const Aarray= [0,1,2,3,4]
const myn= Aarray.slice(1,3)
console.log(myn)
console.log("B", Aarray)
const myn2= Aarray.splice(1,3)//splice ne original array se wo part hi cut krdia
console.log("C", Aarray)