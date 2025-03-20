console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".box").classList)
console.log(document.querySelector(".container").className)
console.log(document.querySelector(".box").className)
 // add a new class:
 // before adding class:
 console.log(`before:${document.querySelector(".container").classList}`)
 // after adding class:
document.querySelector(".container").classList.add("white")
console.log(`after:${document.querySelector(".container").classList}`)
// remove a class:
console.log(`before removing class:${document.querySelector(".container").classList}`)
document.querySelector(".container").classList.remove("white")
console.log(`after removing class:${document.querySelector(".container").classList}`)

// toggle means : if present then remove it and if
// not present then add it:
// toggle method:
console.log(document.querySelector(".container")
.classList.toggle("white"))  // add white class
console.log(document.querySelector(".container")
.classList.toggle("white")) // remove white class
console.log(document.querySelector(".container")
.classList.toggle("white")) // add white class
console.log(document.querySelector(".container")
.classList.toggle("white")) // remove white class
console.log(document.querySelector(".container")
.classList.toggle("white")) // add white class