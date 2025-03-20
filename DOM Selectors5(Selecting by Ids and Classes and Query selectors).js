// selection of elements by class name:

console.log(document.getElementsByClassName("box"))
// or
let boxes=document.getElementsByClassName("box")
console.log(boxes)
console.log(document.getElementsByClassName("box")[0])
console.log(document.getElementsByClassName("box")[1])
console.log(document.getElementsByClassName("box")[2])
console.log(document.getElementsByClassName("box")[3])
console.log(document.getElementsByClassName("box")[4])
 //or
 console.log(boxes[0])
 console.log(boxes[1])
 console.log(boxes[2])
 console.log(boxes[3])
 console.log(boxes[4])

 // change CSS property by selecting classname:

 document.getElementsByClassName("box")[1]
 .style.backgroundColor="red"

 // or
 boxes[1].style.backgroundColor="red"
 boxes[1].style.color="yellow"
 /* document.getElementsByClassName("box")
 .style.backgroundColor="blue" --> it gives no 
result we can't change the all box class elements*/

 // selection of elements by Id name:
 console.log(document.getElementById("box3"))
 // change CSS properties of element by id name:
 document.getElementById("box3").style.backgroundColor="purple"

 // selection of elements by Query selector:
//  console.log(document.querySelector("box")) 
// -> it gives null value
console.log(document.querySelector(".box"))
// it only target the first element which has
// a class of box type.
document.querySelector(".box").style.backgroundColor="pink"
console.log(document.querySelector("#box4"))
document.querySelector("#box4").style.backgroundColor="black"

// note: for selecting the all elements of class 
// box type we use querySelectorAll instead of
// querySelector and we use it by loops:

// document.querySelectorAll(".box").style.backgroundColor="red"
// ---> it gives an error
console.log("Harshit")
console.log(document.querySelectorAll(".box")[0])
console.log(document.querySelectorAll(".box")[1])
console.log(document.querySelectorAll(".box")[2])
console.log(document.querySelectorAll(".box")[3])
// change the backgroundColor of all the elements
// of box type class at once.
for (const key in document.querySelectorAll(".box")) {
        const element = document.querySelectorAll(".box")[key];
        element.style.backgroundColor="red";
    }
  

