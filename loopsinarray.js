arr = [1, 4, 3, 6, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// forEach() method:
/*arr.forEach((value,index,array)=>{
    console.log(value,index,array)
})*/
// or
arr.forEach(
  (v, i, a) => console.log(v, i, a) // we can remove here braces in arrow fuctions.
);
// forin loop:
for (const key in arr) {
  if (arr.hasOwnProperty.call(arr, key)) {
    const element = arr[key];
    console.log(key, element);
  }
}
// forof loop:
for (const value of arr) {
  console.log(value);
}
// map():--> it is used to create a new array from a previous array.this function is also take a function.
let newarr = arr.map((e) => {
  return e ** 2;
});
/*   or
const m=(e)=>{return e**2}
let newarr=arr.map(m)*/
console.log(newarr);
// we can also used index and array with value or element in the map function.for example:
/*let newarr2=arr.map((e,i,a)=>{
    return e**2
})
console.log(newarr2)*/

// filter():
const gtseven = (e) => {
  if (e > 7) {
    return true;
  } else {
    return false;
  }
};
console.log(arr.filter(gtseven));
/*  or
console.log(arr.filter((e)=>{
    if(e>7){
        return true;
    }
    else{
        return false
    }
}))*/

// reduce():
const red = (a, b) => {
  // return a+b
  // or
  // return a-b
  // or
  return a * b;
  // or
  // return a/b
};
console.log(arr.reduce(red));
/* or
console.log(arr.reduce((a,b)=>{
    return a*b
}))*/
