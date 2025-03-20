let a=24;
let age=79;
//if :
if(a>29){
    console.log("Hello");
}
// if else:
if(a>18){
    // console.log("Yes");  or
    console.log("Yes")

}
else{
    // console.log("No");  or
    console.log("No")
}

// if else if else ladder:
if(age>18 && age<80){
    console.log("You can drive");
}
else if(age==18){
    console.log("maybe or not");

}
else if(age>80){
    console.log("you can only drive if you have the special card!");
}
else{
    console.log("You can't drive");
}

// ternary(?) operator:
// syntax: if(condition)?(run that code) else(:)(run this code)
// let b= a>age ?(a-age):(age-a)   or
let b= a>age ?(a-age):(age-a);
/*  or
    if(a>age){
   let b=a-age;
    }
    else{
    let b=age-a;
    }*/
console.log(b);
let c= a>age ?("Yes"):("No");
console.log(c);