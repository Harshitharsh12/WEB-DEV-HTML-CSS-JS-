let num=5
let i=1
let c=0
while(i<=num){
if(num%i==0){
    c++;

}
i++
}
if(c==2){
    console.log(`the ${num} is prime`)
}
else{
    console.log(`the ${num} is not prime`)
}