// Array is an combination or set of multiple data types element.
let arr=[1,2,3,34,4];  //--> Integer type Array
let arr1=[1.9,2.3,3.6,34.4,4.8];  //--> float type Array
let arr2=["Harsha","Kaira"];  //--> string type Array
let arr3=[1,2,3.9,34.6,"Kaira"];  //--> mix type Array
let arr4=['s','e','u','o'];  //--> character type Array
let arr5=[] //-->dynamic array
console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
// console.log(arr[5])  -----> undefined
console.log(arr.length)
// Note: Array is mutable because we can manipulate 
// or change the value of any index of array
//  for example:
arr[0]=5676;
console.log(arr[0])
console.log( typeof arr) //--> An Array is an
// object type like null data type so the
// typeof arr is object.
 
// note: the typeof() of all non-primitive datatype are object.