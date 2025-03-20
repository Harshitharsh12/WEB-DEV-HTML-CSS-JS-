// note: string is immutable.
let s="Harsha"
let k="  kaira"
let st="   lucky  "
 //1. length:
 console.log("the length of s is: "+s.length)  //----> it is a property not a method of string
 //2. toUppercase:
 console.log(s.toUpperCase())
 //3. toLowerCase:
 console.log(s.toLowerCase())
 //4.trim():  ---> remove all the white spaces before and after the string.
 console.log(k)
 console.log(k.trim())
 console.log(st)
 console.log(st.trim())
 console.log(s)
 console.log(s.trim())
 //5.slice(start,end) or substring(start,end):
 console.log(s.slice(0,5)) //----> here index no. 0 is included but 5 is not included
 // or
 console.log(s.substring(0,5)) // ---> here ia also index no. 0 is included but 5 is not included
 console.log(s.slice(0,6))
 console.log(s.slice(0))
 // or
 console.log(s.substring(0))
 console.log(s.slice(0,3))
 console.log(s.slice(1,4))
 console.log(s.slice(4,5))
 console.log(s.slice(1))
 console.log(s.slice(5))
 console.log(s.slice(-3,-1))  
//  console.log(s.slice(-1,-3)) ----> it is not allowed and supported here
// console.log(s.slice(5,1)) ----> it is  also not alllowed here.
//6. replace:
console.log(s.replace("h","k"))
console.log(k.replace('k','a'))
console.log(s.replace("Harsha","kaira"))
s4=k.replace('a','k')   //----> it is changes or replace only first occurence in a string,in this 
//case it only changes the first a of the kaira not the second also and return the kkira.
console.log(s4)
//7. concat:
console.log(s.concat(k))
// or we use also
console.log(s+k)
//8. endsWith():
// console.log(s.endsWith('a'))
// or
console.log(s.endsWith("a"))
console.log(s.endsWith('k'))
console.log(s.endsWith('kai'))
console.log(s.endsWith('sha'))
console.log(s.endsWith("sha"))
console.log(s.startsWith('h'))
console.log(s.startsWith('H'))
console.log(s.startsWith('Har'))
console.log(s.startsWith('har'))
//9. charAt(index no.)
console.log(s.charAt(0))
console.log(s.charAt(1))
console.log(s.charAt(5))
// console.log(s.charAt(6)) -----> undefined beacuse index number 6 is not present.
//10. indexOf(character)
console.log(s.indexOf('r'))
// or
console.log(s.indexOf("r"))
console.log(s.indexOf('Hars'))
// or
console.log(s.indexOf("Hars"))
console.log(s.indexOf('rsh'))
console.log(s.indexOf('Harsha'))
// special case in indexOf():  if a special character is comes twice or it's occurance is twice in a string
// then it only print the first time occurance character index no. for example: In Harsha a is comes
// twice so indexOf(s) output is 1.
console.log(s.indexOf('a'))

// to print reverse of a string:
l=s.length
console.log("the length of the s is: "+l)
/*while(l>=1){
     console.log(s[(l-1)])
    l--} */
    // or
    let srev=":"
    /*while(l>=1){
      srev=srev+s[(l-1)]
        l--
    }        or  */
    for(l=l-1;l>=0;l--){
    srev=srev+s[l]}
console.log(`The reverse of the ${s} is${srev}`)

// importent point: strings are immutable, if we defined it once then we can't update it.
// for example the 's' string on which we performed many methods above, but it not changed,all time
//  we performed  any method on it ,it stores that new output in a new string, see below:
console.log(s)
// for example:
s[1]='k'
console.log(s[1])
console.log(s)