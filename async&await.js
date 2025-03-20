const a=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("My name is Harshit.")
        // let error=false
        let error=true
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
async function func(){
   try{ 
    const b=await a
    console.log(b)}
    catch(error){
        console.log(error)
    }
    console.log("It is inside async!!")
}
func()

// or
// async function func(){
//      const b = await a
//     setTimeout(()=>{
//     try{
//      console.log(b)}
//      catch(error){                 ------> it is wrong syntax
//          console.log(error)
//      }
//      console.log("It is inside async!!")
//  },1000)
// }
//  func()