let arr=[1,2,3,4]
// function hello(){
//     setTimeout(()=>{
//         arr.forEach(element => {
//            console.log(element) 
//         });
// }
// ,1000)
// }

// Method 1:

// function hi(value){
//     let error=true
//     const a= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// arr.push(value)
// error=false
// if(!error){
//     resolve()
// }
// else{
//     reject("reject ho gya hai!!")
// }
// }
// ,2000)
//     })
//     return a
// }
// hi(5).then(hello).catch(error=>console.log(error))

// or

// method 2:

// const a= new Promise((resolve,reject)=>{
//     let error=true
//     setTimeout(()=>{
// arr.push(5)
// error=false
// if(!error){
//     resolve()
// }
// else{
//     reject("reject ho gya hai!!")
// }
// }
// ,2000)
//     })
// a.then(hello).catch(error=>console.log(error))
// or
// a.then(()=>{
//     setTimeout(()=>{
//                 arr.forEach(element => {
//                    console.log(element) 
//                 });
//         }
//         ,1000)
// }).catch(error=>console.log(error))


// or

// method3:

// new Promise((resolve,reject)=>{
//     let error=true
//     setTimeout(()=>{
// arr.push(5)
// error=false
// if(!error){
//     resolve()
// }
// else{
//     reject("reject ho gya hai!!")
// }
// }
// ,2000)
//     })
// .then(hello).catch(error=>console.log(error))
// or
// .then(()=>{
//     setTimeout(()=>{
//         arr.forEach(element => {
//            console.log(element) 
//         });
// }
// ,1000)
// }).catch(error=>console.log(error))

// method 4:
 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        arr.push(5)
        error=false
        if(!error){
            resolve(
                {name:"Harsha",Id:89})
        }
        else{
            reject("reject ho gya hai!!")
        }
        }
        ,2000)
 }).then((obj)=>{
    setTimeout(()=>{
    console.log(obj)
    arr.forEach(element => {
                   console.log(element) 
                });
    },1000)
    }).catch(error=>{
        console.log(error)
    })