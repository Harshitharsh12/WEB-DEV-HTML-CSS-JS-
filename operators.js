let a=90
let b=80
let name="40"
// arithmetic:
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**2)
console.log(a/b)
console.log(a%b)
console.log(a++)
console.log(a--)
console.log(++b)
console.log(--b)
// logical:
if(a<100&&a<b){
    console.log("hello")

}
if(a<100||a<b){
    console.log("hi")
}
console.log(!a) 
//comparison:
if(a<100){
    console.log("wow")
}
if(a>30){
    console.log("looking like a wow!!")
}
if(a<=20){
console.log("jus looking like!!")
}
if(a>=90){
console.log("just!!")
}
if(a==90){
    console.log("both are equals")
}
if(a!=100){
    console.log("both")
}
if(name===40){
    console.log("yes")
}
if(name!==50){
    console.log("no")
}
// assignment operator:
let c=90
let d=0,e=0,f=0,g=0,h=0,i=0;
d+=50
e-=50
f*=5
g/=50
h%=50
i**=50
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
//ternary operator:
let age=9
console.log((age>18)?"pass":"fail")
// bitwise operator:
let num1=2;
let num2=9;
console.log(num1&num2)
console.log(num1|num2)