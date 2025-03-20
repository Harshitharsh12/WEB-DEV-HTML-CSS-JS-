// map function:

let arr=[1,2,3,4,5,6]
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

let newarr=arr.map((element,index,array)=>{
    // console.log(index)
    // console.log(array)
    // console.log(element)
    return element**2
   
})
console.log(newarr)

// filter function:

// const greaterThanSevan=(element)=>{
//     if(element>7){
//     return true}
//     else{
//         return false
//     }
// }
// let array1=newarr.filter(greaterThanSevan)
// console.log(array1)

// or

let array1=arr.filter((element)=>{
    if(element>7){
        return true}
        else{
            return false
        }
    }
) 
console.log(array1)


// reduce function:

// const red=(a,b)=>{
//     return a*b
// }
// const n=arr.reduce(red)
// console.log(n)
 
// or
const n=arr.reduce((a,b)=>{
    return a*b
})
console.log(n)


// let array1=arr.filter((e)=>{
// return arr**2
// })
// console.log(array1)     ---> wrong