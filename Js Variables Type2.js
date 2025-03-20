let x = "harsha";
let y = "harshit kaira";
let a = 567;
let b = 23.6;
const p = true;
let c = undefined;
// or let c
let d = null;
let e; // it's value is undefined
// or
// let e = undefined
// console.log(x, a, b, c, d, p, e)
//or
console.log(x);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(p);
console.log(e);
console.log(
  typeof x,
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof p,
  typeof e
);
// note: null datatype is considered as object so, d's typeof is object.

// //object in js:
// let o = {
//     name: "Harsha",  //or
//     // "name":"Harsha",
//     "job code": 5766, // here "" is necessary
//     place: "india"
// }
// //note:it is necessary that for the string type keys in
// // the case of  object
// // which contain space(-).we should use the quote("") symbole
// // for that but not necessary for the values which is not
// // contain spaces
// console.log(o)
// console.log(typeof o)

// // add a new key pair value in the object:
// o.salary = 76779
// // o.salary:76779 --> syntax error
// // o."salary"=76779 --> gives a syntax error
// o.is_true = "true"
// // o."is_true"="true" --> gives a syntax error
// // o."is true"="true" --> gives an syntax error
// console.log(o)

// // alter the values of keys in the object:
// o.salary = 788908;
// // we can also freeze the keys of any object
// // by freezing any key we can't alter or update it.
// Object.freeze(o)
// o.is_true = "false" // here the "is_true "value is not changed
// // or alter because we freeze the o object"
// console.log(o)

// // print any particular key pair element of object:
// // console.log(o["salary"])
// // or
// console.log(o.salary)   // or
// console.log(o["salary"])
// //  console.log(o[salary]) ----> it gives an error.
// console.log(o["job code"])
// // console.log(o[job code])  --> all three gives an error.
// // console.log(o.job code)
// // console.log(o."job code")

// // symbol datatype:
const sd1 = Symbol("123");
const sd2 = Symbol("123");
console.log(sd1);
console.log(sd2);
console.log(sd1 == sd2); // here the values are not same
console.log(typeof sd1);
// // we can also add symbol datatype in an object:
// const obj = {
//     // sd:"Harsha"  --> it gives a syntax error.
//     [sd]: "Harsha",
//     myfunc1: function () {
//         console.log("hello")

//     }
// }
// console.log(obj[sd])
// // console.log(obj.sd)  --> it is not valid here.

// // we can add a function as a key-pair value(element) in an object:
// obj.myfunc2 = function () {
//     console.log("hello Harshit")
// }
// console.log(obj.myfunc1())
// console.log(obj.myfunc2())
// // we can also do nesting in objects which means we can define an object as an element in the object:
// // for example:
// const obj1 = {
//     name: "Harsha",
//     obj2: {
//         name: "lalit",
//         class: "BCA"
//     }
// }
// console.log(obj1)
// console.log(obj1.obj2) // or
// // console.log(obj1["obj2"])

// /// take another Example:
// const obj3 = {
//     color: "white",
//     obj4: {
//         obj5: {
//             obj6: {
//                 color: "blue"
//             }
//         }
//     }
// }
// console.log(obj3)
// console.log(obj3.obj4)
// console.log(obj3.obj4.obj5)
// console.log(obj3.obj4.obj5.obj6)

// // we can also add an array  as an element in an object:
// // for example:
// const obj7={
//     arr1:[1,2,3,4,5],
//     arr2:["harsha","kaira"]
// }
// console.log(obj7)
// console.log(obj7.arr1)
// console.log(obj7["arr1"])
// console.log(obj7.arr2)
// console.log(obj7["arr2"])
