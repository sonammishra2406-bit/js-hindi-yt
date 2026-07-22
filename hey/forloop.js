for(let i =1; i<5; i++){
    
    for(let j=1; j<11; j++){
        console.log( i+ "*"+ j + "="+ i*j)
    }
}
 const arr=["Sonam", "Mishra", "Student"]                // use of continue and break( continue skips that element)
 for(let i=0; i<= arr.length; i ++){
    if ( i == 1){
        continue
    }
    if(i ==3){
        break
    }
 console.log(arr[i])
 }