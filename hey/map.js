const numbers =[1,2,3,4,5,6,7,8,9,10]
const nums= numbers.filter((num)=>{
return num>4;
})
console.log(nums)


//M2
const num= numbers.filter((nun)=> nun>=4)   //{}scope not used so return not required
console.log(num)           //foreach loop use if case then num.push(nun)

let userbooks= [
    {
        book: "First", Edition: 2007, Genre: "fiction"
    },{
        book: "Second", Edition: 2009, Genre: " non-fiction"
    },
    {
        book: "third", Edition: 1999, Genre: "drama"
    }
]
let b= userbooks.filter((book)=> book.Edition> 2000)
b= userbooks.filter ((book)=> book.Genre == "drama")
console.log(b)                // didnt use both the cases so either use && or use chaining 


//CHAINING    name.map(()=>{}.map(()=>{}))
    let arr= [1,2,3,4,5,6]
    const numbs= arr
    .map((num)=> num*10)
    .map((num)=>num +1 )
    console.log(numbs)

//REDUCE 
const brr= [1,2,3]
const reduced= brr.reduce((accumulator, currval)=> accumulator + currval , 0)    //0 is the intial value for accumulator and currval is 1,2,3 simulatneously
console.log(reduced)

//Method 2 for writing initiative value in accumulator
// (function (add){ acc+ cuurval} , 0)

//Bill creation
const order = [ 
    { 
        product : "Lipgloss",
        price : 2000
    },
    {
        product : "Dress",
        price : 4000
    },
    {
        product : "Jeans",
        price : 6000
    }
]
const bill = order.reduce ((acc, items)=> acc+ items.price, 0)
console.log(bill)