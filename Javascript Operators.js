// let a=34
// let b="har"
// let c=56.8
// let d=79
/* console.log(a+b)
// console.log(a+c)
// console.log(a+d)

 or */

let a=34;
let b="har";
let c=56.8;
let d=79;
let age=23;
//1. Arithmetic operator
console.log(a+b);
console.log(a+c);
console.log(a+d);
console.log(a-d);
console.log(a*d);
console.log(a/d);
console.log(d/a);
console.log(a%d);
console.log(d%a);
console.log(a**2);
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log(a--);
console.log(a);
console.log(--a);
//2. Assignment operator
a=8;
console.log(a)
//Increment assignment operator
a+=5;
console.log(a);
//Decrement assignment operator
a-=8;
console.log(a);
// multiply assignment operator
a*=2;
console.log(a);
// division assignment operator
a/=2;
console.log(a);
// Exponential assignment operator
a**=2;
console.log(a);
// Modules assignment operator
a%=2;
console.log(a);

//3. comparison operator
console.log(a==8);
console.log(a!=8);
console.log(2=="2"); //----> compare only value of two variables not type
console.log(2==="2"); //----> compare both(value and type) of the variables.
console.log(2===2);
console.log("2"==="2");
console.log("2"!=2); //----> compare only value of two variables not type
console.log("2"!==2); //----> compare both(value and type) of the variables.
console.log(a>4);
console.log(a>=4);
console.log(a<4);
console.log(a<=4);

//4. Logical operator

//logical AND(&&)
console.log(a>4&&a<4);
//Logical OR(||)
console.log(a>4||a<4);
// Logical NOT (!)
console.log(!(a>4||a<4));
console.log(!(a>4&&a<4));
 //5. Ternary operator
// syntax: if(condition)?(run that code) else(:)(run this code)
// let b= a>age ?(a-age):(age-a)   or
let m= a>age ?(a-age):(age-a);
console.log(m);
let n= a>age ?("Yes"):("No");
console.log(n);