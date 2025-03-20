let num=101
let temp=num
let r
let reverse=0
while(num>0){
r=num%10
num=Math.floor(num/10)
reverse=reverse*10+r
}
if(reverse==temp){
console.log(`${temp} is a palindrome number.`)
}
else{
    console.log(`${temp} is not a palindrome number.`)
}



