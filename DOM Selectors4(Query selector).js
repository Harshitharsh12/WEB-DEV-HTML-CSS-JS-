// Universal selector:
document.querySelector("*").style.color="red"
let element =document.querySelector("*")
console.log(element)
let elements=document.querySelectorAll("*")
console.log(elements)
console.log(elements[0])
console.log(elements[1])

// type selector:
console.log(document.querySelector("h1"))
document.querySelector("h1").style.color="yellow"
document.querySelector("h2").style.color="blue"
document.querySelector("p").style.color="blue"
document.querySelector("div").style.color="orange"
document.querySelector("span").style.color="brown"

// class selector:
 document.querySelector(".container").style.
 backgroundColor="pink"

 // Id selector:
 document.querySelector("#box1").style
 .backgroundColor="black"

 // attribute selector:
 document.querySelector("[style]")
 .style.color="white"

 // grouping selector:
 document.querySelector("div p").style.color=
 "green"