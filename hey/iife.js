//IIFE IMMEDIATE INVOKED FUNCTION EXP--> executes codes faster and mainly the global scope of pollution (var)causes problem
(function chai( name){
console.log(`Hi ${name}`)
})("Sonam");   //special case ; end krenge tbhi run hoga else the below func wont run
((name)=>{
    console.log(`By ${name}`)
})("Sonam")