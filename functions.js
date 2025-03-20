function hello(){
console.log("this is javascript")
console.log("it is lies under webdev.")
}
hello()

//arguments taking function:

/*function sum(a,b,c=7){
let s=a+b+c
console.log(s)
}
// console.log("the sum is: "+sum(2,3)) -----> it is wrong syntax it gives an error.
console.log("the sum is: ")
sum(2,3)*/
// or
function sum(a,b,c=7){
    s=a+b+c
    return s
    }
    //  console.log("the sum is: "+sum(2,3)) 
    // or
    p=sum(2,3)
    console.log("the sum is: "+p)