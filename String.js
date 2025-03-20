let s="Harsha"
console.log(s)
console.log(s[0])
console.log(s[1])
console.log(s[2])
console.log(s[3])
console.log(s[4])
console.log(s[5])
// console.log(s[6])  ---> it print undefined
let k="kaira"
// console.log("the name is "+s+" and the cast is "+k)     or
// we use here template literals in template literals we use backticks(``) instead of double quotes("")
console.log(`the name is ${s} and the cast is ${k}`)
// we can also used escape sequence character("",\,\n,\t,\r) with the help of ``(backticks)
console.log(`the name is "${s}" and the cast is "${k}"`)
console.log(`the name is '${s}' and the cast is '${k}'`)
console.log(`the name is "${s} and the cast is "${k}`)
console.log(`the name is \ ${s} and the cast is \ ${k}`)
console.log(`the name is ${s} and the cast is \n${k}`)
console.log(`the name is \n${s} and the cast is \n${k}`)
//or
console.log("the name is \""+s+" and the cast is \""+k)
console.log("the name is \'"+s+" and the cast is \'"+k)
console.log("the name is \\"+s+" and the cast is \\"+k)
console.log("the name is \n"+s+" and the cast is \n"+k)

console.log(typeof s)
console.log(typeof k)