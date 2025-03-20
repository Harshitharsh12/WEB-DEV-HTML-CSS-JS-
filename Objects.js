let obj=new Number()
let obj1=new Number(45)
let obj3=new Function(()=>{
console.log("hi")
})
let obj2=new Boolean()
let obj4=new Boolean(false)
let obj5=new Function()
console.log(obj)
console.log( typeof obj)
console.log(obj2)
console.log(typeof obj2)
obj=89
obj2=true
console.log(obj)
console.log(obj2)
console.log(obj1)
console.log(obj4)
console.log(obj3)
console.log(obj3())
obj5=() =>{
    console.log("hello")
    return 78;
}
console.log(obj5())