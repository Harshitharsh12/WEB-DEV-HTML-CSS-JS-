let a = document.querySelector(".grandchild")
let b = document.querySelector(".child")
let c = document.querySelector(".container")
/*a.addEventListener("click", () => {
    alert("you click on the child of the child")
})   //---> it automatically call the b and c's eventlisteners if they are present.
b.addEventListener("click", () => {
    alert("you click on the child of the container")
})    //---> it automatically call the c's eventlistener if this is present.
c.addEventListener("click", () => 
    alert("you click on the container")
)
*/
a.addEventListener("click", (e) => {
    alert("you click on the child of the child")
    e.stopPropagation()
})
b.addEventListener("click", (e) => {
    alert("you click on the child of the container")
    e.stopPropagation()
})
c.addEventListener("click", () => 
    alert("you click on the container")
)
// document.body.addEventListener("click",()=>{
// alert("you clicked on body")
// })
// document.body.addEventListener("click",()=>{
//     alert("you click")
// })
function getColor(){
        let col1=0+Math.random()*255
        let col2=0+Math.random()*255
        let col3=0+Math.random()*255
        return `rgb(${col1},${col2},${col3})`
    }
    // for changing background of all boxes after every one second.

setInterval(()=>{
a.style.background=getColor()
},1000)
setInterval(()=>{
    b.style.background=getColor()
    },1000)
 setInterval(()=>{
        c.style.background=getColor()
        },1000)

 // for changing background of all boxes after one second only one time.

// setTimeout(()=>{
//     a.style.background=getColor()
//     },1000)
//     setTimeout(()=>{
//         b.style.background=getColor()
//         },1000)
//      setTimeout(()=>{
//             c.style.background=getColor()
//             },1000)