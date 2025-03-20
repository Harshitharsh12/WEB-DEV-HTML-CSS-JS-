let n=prompt("enter the number:")
let temp=n
let p=0
let r=0
while(n>0){
    r=n%10
    n=Math.floor(n/10)
    p=p*10+r
}
if(p==temp){
console.log(`the ${temp} is palindrome`)
}
else{
    console.log(`${temp} is not palindrome`)
}