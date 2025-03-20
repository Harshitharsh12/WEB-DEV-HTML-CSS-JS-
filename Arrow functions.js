// Arrow function:
const func = (a, b) => {
  // console.log("the sum of "+a+" and "+b+" is:"+ (a+b))
  //  or
  // console.log("the sum of "+a+" and "+b+" is:", (a+b))
  //    or
  console.log(`the sum of ${a} and ${b} is: ${a + b}`)
}
func(3, 4)


// another type to write Arrow function: we can write arrow function in single line when it have only one line to print
// we can also skip braces{}

const func2 = () => console.log("hello, I am Harshit")
func2()

// we can also write it in single line when it have multiple line to print,we use semicolon in this case, 
// but we don't recommend it:

// const func3=()=> console.log("hello, I am Harshit") console.log("and who are you?")---> syntax  error without using ;
const func3 = () => console.log("Harshit"); console.log("and who are you?")
func3()

// we can also give the arguments in the single line arrow functions:

// const func4=(name,cast)=>console.log("Hello "+name + cast)
// or
const func4 = (name, cast) => console.log(`Hello ${name} ${cast}`)
func4("Harshit", "kaira")

// we can also remove the parenthesis in single line Arrow function but in this case we should always
//  give it any argument:
// const func5= =>console.log("Good afternnon")---->throw an error 
const func5 = name => console.log("Good afternnon " + name)
func5("Harsha")
// but we can't remove parenthesis when it take more than one arguments, for example:

//  const func6=name,cast=>console.log(`Good afternoon ${name} ${cast}`)-----> give an syntax error without using ()
const func6 = (name, cast) => console.log(`Good afternoon ${name} ${cast}`)
func6("harshit", "kaira")