let arr=[2,3,5,6]
let arr2=[]
let arr3=new Array(4,6,8,9)
// console.log(arr[0])
// arr[0]=90
// console.log(arr[0])
// console.log(arr2)
// console.log(arr2[0])
// arr2[0]=990
// console.log(arr2[0])
// let n=prompt("enter the length of array:")
// for(let i=0;i<n;i++){
//     let num=prompt(`enter the ${i+1}th element of array:`)
//     arr2[i]=num
// }
// console.log("the elements of array are:")
// arr2.forEach(element => {
//     console.log(element)
// });
// array methods:
console.log(arr.length)
console.log(arr.reverse())
console.log(arr.at(2))
console.log(arr.toString())
arr.push(50)
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.join("and"))
arr.shift()
console.log(arr)
arr.unshift(90)
console.log(arr)
console.log(arr.sort())
console.log(arr.concat(arr3))