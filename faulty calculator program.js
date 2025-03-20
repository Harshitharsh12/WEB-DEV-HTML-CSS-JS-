let n = Math.random()
alert("the random number is: " + n)
let num1 = parseInt(prompt("Enter the first number"))
let num2 = parseInt(prompt("Enter the second number"))
let operator = prompt("Enter the operator symbol(any one from them:+ - * /) which is performed:")
if (n <0.1) {
    switch (operator) {
        case '+': alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 - num2))
            break;
        case '-': alert("The subtraction of " + num1 + " and " + num2 + " is: " + (num1 + num2))
            break
        case '*': alert("The multiplication of " + num1 + " and " + num2 + " is: " + (num1 / num2))
            break
        case '/': alert("The division of " + num1 + " and " + num2 + " is: " + (num1 ** num2))
            break
        default: alert("you enter the wrong operator symbol")
    }
}
else {
    switch (operator) {
        case '+':
            alert("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2))
            break
        case '-': alert("The subtraction of " + num1 + " and " + num2 + " is: " + (num1 - num2))
            break
        case '*': alert("The multiplication of " + num1 + " and " + num2 + " is: " + (num1 * num2))
            break
        case '/': alert("The division of " + num1 + " and " + num2 + " is: " + (num1 / num2))
            break
        default: alert("you enter the wrong operator symbol")
    }
}

