console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("div")[0])
console.log(document.getElementsByTagName("div")[1])
console.log(document.getElementsByTagName("div")[2])
console.log(document.getElementsByTagName("div")[3])
console.log(document.getElementsByTagName("div")[4])
console.log(document.getElementsByTagName("div")[5])
document.getElementsByTagName("div")[0].style.color="red"
document.getElementsByTagName("div")[4].style.color="yellow"

// chnage multiple elements properties at one 
// time by for loop:
for(const key in document.getElementsByTagName("div")) {
    const element = document.getElementsByTagName("div")[key];
    // console.log(element)
    element.style.backgroundColor="blue"}
    
    for(const key in document.getElementsByName('Harsha')) {
        const element = document.getElementsByName('Harsha')[key];
        // console.log(element)
        element.style.color="blue"}
        
    