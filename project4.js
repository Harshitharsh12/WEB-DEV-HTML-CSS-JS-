const a=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Initializing Hacking...")
        let error=false
        // let error=true
        if(!error){
            resolve()
        }
        else{
            reject("reject ho gya hai!!")
        }
        }
        ,2000)
})
const b=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Reading your Files...")
        let error=false
        // let error=true
        if(!error){
            resolve()
        }
        else{
            reject("reject ho gya hai!!")
        }
        }
        ,3000)
})
const c=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Password files Detected...")
        let error=false
        // let error=true
        if(!error){
            resolve()
        }
        else{
            reject("reject ho gya hai!!")
        }
        }
        ,4000)
})
const d=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Sending all Password and Personal files to the Server...")
        let error=false
        // let error=true
        if(!error){
            resolve()
        }
        else{
            reject("reject ho gya hai!!")
        }
        }
        ,5000)
})

async function run(){
    try{
        const e=await a
        document.querySelectorAll(".h")[0].style.innerHTML=e
        const f=await b
        document.querySelectorAll(".h")[1].style.innerHTML=f
        const g=await c
        document.querySelectorAll(".h")[2].style.innerHTML=g
        const h=await d
        document.querySelectorAll(".h")[3].style.innerHTML=h
    }
    catch(error){
console.log(error)
    }
}
run()