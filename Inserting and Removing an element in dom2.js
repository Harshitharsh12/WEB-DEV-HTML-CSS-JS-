// remove an attribute of any class:
console.log(`before removing style attribute: ${document.querySelector(".box").hasAttribute('style')}`)
document.querySelector(".box").removeAttribute('style')
console.log(`after removing style attribute: ${document.querySelector(".box").hasAttribute('style')}`)

// data attribute: data attributes are the custom attributes and we can add any custom data attribute:
console.log(document.querySelector(".box").getAttribute('data-createdby'))
console.log(document.querySelector(".box").getAttribute('data-conceptby'))
// or
console.log(document.querySelector(".box").dataset)

// create an element :
let div=document.createElement("div")
// add some text on this element:
div.innerHTML="I have been inserted <b> by Harsha</b>"
// div.innerText="I have been inserted <b> by Harsha</b>"
// div.innerHTML="<span>Hello</span>"
// set the attributes of element if no attribute present-
// then it automatically create it first:
div.setAttribute("class","created")
// Insert an element :
// document.querySelector(".container").append(div)
// or
// document.querySelector(".container").after(div)
// document.body.append(div)
document.querySelector(".container").prepend(div)
// or
// document.querySelector(".container").before(div)

// insertAdjacentHTML/Text/Element:
// document.querySelector(".container").insertAdjacentElement(<p>
//     hello
// </p>)

// remove any node or element:
// .box[0] before remove:
console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").remove())
// after remove:
console.log(document.querySelector(".box")) //--> now it return the .box[1]
// becauswe now it is box[0]

