let n = Math.random()
alert("the random number is: " + n)
let num1 = parseInt(prompt("Enter the first number"))
let num2 = parseInt(prompt("Enter the second number"))
let operator = prompt("Enter the operator symbol(any one from them:+ - * /) which is performed:")
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**"
}
if (n >=0.1) {
    alert(`the ${operator} of ${num1} and ${num2} is:${eval(`${num1}${operator}${num2}`)}`)
}
else{
    operator=obj[operator]
    alert(`the ${operator} of ${num1} and ${num2} is:${eval(`${num1}${operator}${num2}`)}`)
}   
