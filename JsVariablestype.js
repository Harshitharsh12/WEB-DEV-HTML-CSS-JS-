console.log("Hey, it is javascript!");
// we can only use letters(alphabets),numbers,doller sign and underscore to make a varable name.
// the variable name is always begins with the letter or doller or underscore not only number.
// var a=5;
// a=a+1;   //allowed
// var b=6;
// var c="Harsha"
// var_a="harshit"
// var $a="harsh"
// var x34=89;
// var x_5=567;
// var x$=456;
// var 5a="kaira" ---> not allowed
// console.log(a+b)
// console.log(typeof a, typeof b, typeof c,  typeof _a)
const a1 = 6;
//  a1=a1+1;    not allowed because a1 is constant

// note: we should always use let instead of var because var is globally scoped and let is block scoped.
// var ab=5;

// {var ab=88;
//     console.log(ab)
// }
// console.log(ab)
let a = 5;
//a=a+1;   allowed
{
  let a = 88;
  console.log(a);
}
console.log(a);
let b = 6;
let c = "Harsha";
let_a = "harshit";
let $a = "harsh";
let x34 = 89;
let x_5 = 567;
let x$ = 456;

// note: we can change the values of the let and var but not
// the const type variable when we changed the value of var
// type variable its change the value globally i.e.; for var
// a the a  value is changed for whole the program but in the
// case of the let the value is changed for only block level.

// we can also declare a variable without any let and var notattion, it is default "var"
//  type,like this:
v = 78; // == var v=78 (default)
console.log(v);

{
  v = 90;
  console.log(v);
}
console.log(v);
// but we don't use it.
