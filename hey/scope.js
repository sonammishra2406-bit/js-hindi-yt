var c=500
if(true){
    let a=7
    c=70
}
console.log(c)   //output is 70 but it should be 500 so scope issue



let a=3
if(true){
   let a=5
    let c=9
}
console.log(a)
// childs can use parent value but parents cant access child value both function and if loop
function parent(){
   const name= "Sonam"
    function child(){
      const  website = "utub"
        console.log(name)
    }
    //console.log (website )----> no output
    child()
    }
    parent()

    if(true){
        let username= "Mishra"
        if(username === "Mishra"){
            const website= "Youtube"
            console.log( username+ website)
        }
        // console.log(website)-->cant access
    }

console.log(addone(5))
    function addone(num){
        return num+1
    }

    const addtwo= function (num){
        return num +2
    }
    console.log(addtwo(3))