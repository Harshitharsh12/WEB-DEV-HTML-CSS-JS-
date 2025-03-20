let num=5
let i=1
let c=0
 while(i<=num){
    if(num%i==0){
        c++
    }
    i++
 }
 if(c==2){
    console.log(`${num} is a prime number`)

 }
 else{
    console.log(`${num} is not a prime number`)
 }

 