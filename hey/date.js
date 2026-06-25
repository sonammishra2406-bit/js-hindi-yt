let myDate = new Date()
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(typeof myDate)
let cDate= new Date(2023,0,14,5,3)//date("2023-01-14")
console.log(cDate.toDateString())
console.log(cDate.getDate())
let timespent= Date.now()
console.log(timespent)
console.log(cDate.getTime())//in milisecongs so will convert into seconds
console.log(Math.floor((cDate.getTime())/1000))
console.log(cDate.getMonth())
cDate.toLocaleString('Default', {
    weekday:"long"
})