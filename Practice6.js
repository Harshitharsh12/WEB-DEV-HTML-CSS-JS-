function getColor(){
// get a random number between two numbers(a,b):
// a+Math.random()*(b-a)
// for example random numbers between 0 to 255:
    let col1=0+Math.random()*255
    let col2=0+Math.random()*255
    let col3=0+Math.random()*255
    return `rgb(${col1},${col2},${col3})`
}
// for (const i of document.querySelectorAll(".box")) {
// i.style.backgroundColor=getColor()
// i.style.color=getColor()
// }

// or
// for (const i of document.getElementsByClassName("box")) {
//     i.style.backgroundColor=getColor()
//     i.style.color=getColor()
// }

// or
// for (const i of document.body.children[0].children) {
//     i.style.backgroundColor=getColor()
//     i.style.color=getColor()
// }

// or
for (const i of document.body.childNodes[1].children) {
    i.style.backgroundColor=getColor()
    i.style.color=getColor()
}