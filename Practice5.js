let num=Math.random()
console.log(num)
/*let first
let second
let third
if(num<0.33){
first="Crazy"
second="Foods"
third="Hub"
console.log(`The company name is: ${first} ${second} ${third}`)
}
else if(num>=0.33&&num<0.66){
    first="Fire"
    second="Engine"
    third="Bros"
    console.log(`The company name is: ${first} ${second} ${third}`)
}
else{
    first="Amazing"
    second="Garments"
    third="Limited"
    console.log(`The company name is: ${first} ${second} ${third}`)
}*/
function companyName(first,second,third){
console.log(`The company name is: ${first} ${second} ${third}`)
}
if(num<0.33){
companyName("Crazy","Foods","Hub")}
else if(num>=0.33&&num<0.66){
    companyName("Fire","Engine","Bros")
}
else{
    companyName("Amazing","Garments","Limited")
}