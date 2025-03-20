let arr=[1,2,3,4]
function hello(){
    setTimeout(()=>{
        arr.forEach(element => {
           console.log(element) 
        });
}
,1000)
}
// without callback() function:
// function hi(value){
//     setTimeout(()=>{
// arr.push(value)
// }
// ,2000)
// }
// hello()
// hi(5)
// or
// hi(5)
// hello()

// with callback() function:

function hi(value,callback){
    setTimeout(()=>{
arr.push(value)
callback()}
,2000)}
hi(5,hello)