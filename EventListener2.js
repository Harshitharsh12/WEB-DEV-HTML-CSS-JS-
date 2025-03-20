let button1=document.querySelector(".box")
let button2=document.querySelectorAll(".box")[1]
let button3=document.querySelectorAll(".box")[2]
let button4=document.querySelectorAll(".box")[3]
// button1.addEventListener("click", ()=> alert("you click on first button"))
// button1.addEventListener("dblclick", ()=> alert("you doubleclick on first button"))
// button1.addEventListener("contextmenu", ()=> 
// {alert("you do the two-finger tap on the button or right-click of the mouse ")})
button1.addEventListener("mouseover", ()=> 
{alert("you do hover on button1")})
button1.addEventListener("mouseover", ()=>   //--> we can add more thgan one eventlistener in an element.
{alert("we can hover more than one time on button1")})
button2.addEventListener("mouseout", ()=> 
{alert("you stop hover on button2 and leave the button2")})
button1.addEventListener("keydown", ()=>
{alert("you press any key in the keyboard and you select the button1 ")})
// document.addEventListener("keydown", ()=>
// {alert("you press any key in the keyboard ")})
document.addEventListener("keydown", (e)=>
{alert(`you press '${e.key}' key in the keyboard and it's keycode is
'${e.keyCode}'`)
console.log(e)}
)