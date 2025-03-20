// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//     console.log("My name is Harshit")
//     error=false
//     if(!error){resolve("task is completed!!")}
//     else{reject("something is wrong!!")}
//     }
//     ,2000)
// }).then((string)=>{
//     setTimeout(()=>{
//         console.log("I am a BCA Student!!")
//         console.log(string)
//     },1000)
// }).catch(error=>console.log(error))

// or
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("My name is Harshit")
//         error=false
//         if(!error){
//             resolve(
//                 {name:"Harsha",Id:89})
//         }
//         else{
//             reject("reject ho gya hai!!")
//         }
//         }
//         ,2000)
//  }).then((obj)=>{
//     setTimeout(()=>{
//     console.log(obj.name)
//     },1000)
//     }).catch(error=>{
//         console.log(error)
//     })

// or

const a=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("My name is Harshit")
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
 })
a.then((obj)=>{
return obj.name 
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
console.log("the promise is either resolve or rejected!!")
})

// finally inside content is always executed .