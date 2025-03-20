async function func(){
    try{ 
     const b=await fetch("https://www.opera.com/client/upgraded")
     const data=await b.json()
     console.log(data)
    }
     catch(error){
         console.log(error)
     }
     console.log("It is inside async!!")

 }
 func() 

 // by then and catch:
 
//  fetch("https://in.search.yahoo.com/search?fr=mcafee&type=E210IN714G0&p=netlify")
//  .then((a)=>{
//     return a.json()
//  })
// .then((data)=>{
// console.log(data)
//  }).catch((error)=>{
// console.log(error)
//  })

 