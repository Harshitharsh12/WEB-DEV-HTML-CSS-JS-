// we can also use the functions in the object as element:
let obj={
    name:"Harshit",
    age:21,
    role:"Developer",
    // function as element:
    show: function (){
console.log(`the name of the object is ${this.name} and the age is ${this.age}`)
// or
// console.log(`the name of the object is ${obj.name} and the age is ${obj.age}`)
    }

}
console.log(`the name of the object is ${obj.name} and the age is ${obj.age}`)
// or
obj.show()