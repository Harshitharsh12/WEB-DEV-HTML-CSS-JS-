let b1=document.querySelector(".box1")
let b2=document.querySelector(".box2")
let b3=document.querySelector(".box3")
let b4=document.querySelector(".box4")
function event1(){
    alert("you click on button1")
}
b1.addEventListener("click",event1,true)
b1.addEventListener("click",event1,false)
b1.removeEventListener("click",event1,true) //-- only first eventlistener(true) is removed .
