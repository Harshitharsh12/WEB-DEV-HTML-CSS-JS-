let num=prompt("Enter the number")
let fact=1;
let temp=num
/* // by using reduce:
for(num;num>=1;num--){
fact=fact*num
}
alert(`The factorial of ${temp} is: ${fact}`)
*/
// by using increase:
for(let i=1;i<=num;i++){
    fact=fact*i
}
alert(`The factorial of ${temp} is: ${fact}`)
