function mult(a,b,c=9){
    m=a*b*c
    return m
}
console.log("the multiplication is: "+mult(1,2))
// console.log("the multiplication is: "+mult(1)) --> wrong syntax give error
console.log("the multiplication is: "+mult(1,2,5))  // ---> we can give the c value also and now it take c as 5


