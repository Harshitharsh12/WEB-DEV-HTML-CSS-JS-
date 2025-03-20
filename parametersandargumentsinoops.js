class A{
     a=90
     b=80   
    constructor(c){
        console.log(`Hey,I am constructor${c}!!`)
    }
    hello(){
        // this.a=a
        // this.b=b
        // console.log(`Hello guys, ${a+b} time!!`)  --> it is wrong
        // console.log(`Hello guys, ${this.a+this.b} time!!`)  --> it is right
        // return a+b  ---> it is wrong syntax.
        return this.a+this.b//--> right syntax
    }
    kallo(d,e){// this is parameters
        return d+e
    }
    hallo(string){// this is parameters
        return string
    }

}
let d=6
let e=9
let s="hello"
let obj1=new A(1)//--> constructor function
console.log(obj1.hello())
console.log(obj1.kallo(d,e)) //this is arguments
console.log(obj1.hallo(s))  //--> this is arguments.
// console.log(obj1.a) --> gives an error
// console.log(obj1.b) --> gives an error
console.log(obj1)