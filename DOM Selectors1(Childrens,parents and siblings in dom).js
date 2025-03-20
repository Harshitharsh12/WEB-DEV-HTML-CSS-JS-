console.log("Hello World!")
console.log(document.body)
console.log(document.head)
// print all the childnodes(tags) including text under 
// the body.
console.log(document.body.childNodes)
// print the first childnode(always text)
// of body.
console.log(document.body.childNodes[0])
//or
console.log(document.body.firstChild)
// print the second childnode of body.
console.log(document.body.childNodes[1])
// print the third childnode of body.
console.log(document.body.childNodes[2])
// print the fourth childnode of body.
console.log(document.body.childNodes[3])
//or
console.log(document.body.lastChild)
// console.log(document.body.childNodes[4])
// print the all childnodes including text of
//  second childnode of body. 
console.log(document.body.childNodes[1].childNodes)
// or
let cont =document.body.childNodes[1]
console.log(cont.childNodes)
// print first child node of the body's 
//2nd childnode:
console.log(cont.childNodes[0])
// or
console.log(cont.firstChild)
// print last child node of the body's 
//2nd childnode:
console.log(cont.childNodes[12])
// or
console.log(cont.lastChild)
// print first element child node (in element 
// child node the text and comments is not 
// included) of the body's 2nd childnode:
console.log(cont.firstElementChild)
// print last element child node (in element 
// child node the text and comments is not
//  included) of the body's 2nd childnode:
console.log(cont.lastElementChild)
cont.lastElementChild.style.backgroundColor="blue"
cont.lastElementChild.style.color="red"
// print the parent node of the last element
// child node of body's 2nd childnode.
console.log(cont.lastElementChild.parentElement)
// print the first element child node of the 
// body
console.log(document.body.firstElementChild)
// print the first childnode(always text)
// of body
console.log(document.body.firstChild)
// print all the childnodes(tags) including text under 
// the body
console.log(document.body.childNodes)
// print all the element child nodes (in element 
// node the the text and comment is not included)
//  of the body.
console.log(document.body.children)
// print all the element child nodes (in element 
// node the the text and comment is not
// included) of the first element child node 
// of body.
console.log(document.body.firstElementChild.children)
// print the first element child node(in element 
// node the the text and comment is not
// included) of the first element child node 
// of body.
console.log(document.body.firstElementChild.children[0])
// print the second element child node(in element 
// node the the text and comment is not
// included) of the first element child node 
// of body
console.log(document.body.firstElementChild.children[1])
// print the second child node of the second
// child node of the body.
console.log(cont.childNodes[1])
// print the next sibling element node or element 
// child  node of the 4th element child node of 
// the  first element child node of the body.
console.log(document.body.firstElementChild.children[3].nextElementSibling)
// print the next sibling node or child 
// node of the 4th element child node of the 
// first element child node of the body.
console.log(document.body.firstElementChild.children[3].nextSibling)
// print the previous sibling element node or element 
// child node of the 4th element child node of 
// the  first element child node of the body.
console.log(document.body.firstElementChild.children[3].previousElementSibling)
// print the previous sibling node or 
// child node of the 4th element child node of 
// the  first element child node of the body.
console.log(document.body.firstElementChild.children[3].previousSibling)
// print the parent node of the previous sibling 
// node or child node of the 4th element child 
// node of the first element child node of 
// the body
console.log(document.body.firstElementChild.children[3].previousSibling.parentElement)
