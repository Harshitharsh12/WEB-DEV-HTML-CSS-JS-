const date1=new Date() //--> create the date object.
console.log(date1)
console.log(date1.toString())
// another type: we can give it an argument also:
// different types to create date object:
const date2=new Date(2024,0,1)
// console.log(date2.toString())
// const date3=new Date(2024,0,1,4,9)
// console.log(date3.toString())
// const date4=new Date("1-5-2024")
// console.log(date4.toString())
// const date5=new Date("2024-5-1")
// console.log(date5.toString())
// const date6=new Date("1/5/2024")
// console.log(date6.toString())
// const date7=new Date("august 4 2024")
// console.log(date7.toString())

// different methods of Date objects in javascript:
console.log(date2.toString())
console.log(date2.toLocaleString())
console.log(date2.toISOString())
console.log(date2.toUTCString())
console.log(date2.toDateString())
console.log(date2.toTimeString())
console.log(date2.toLocaleTimeString())
console.log(date2.toLocaleDateString())
console.log(date2.getTime())
console.log(date2.getDate())
console.log(date2.getDay())
console.log(date2.getMonth()) // in js the month is start with 0
console.log(date2.getMonth()+1)
console.log(date2.getFullYear())
console.log(date2.getYear())
console.log(date2.getHours())
console.log(date2.getMinutes())
console.log(date2.getSeconds())
console.log(date2.getMilliseconds())

console.log(typeof(date2))

// to craete a now date object: it is used to get the time in miliseconds
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))//--> to get the time in seconds