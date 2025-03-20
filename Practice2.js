let age=90;
if(age>10&&age<20){
    console.log("Yes,the age is lies between 10 to 20");
}
else{
    console.log("No,the age is not lies between 10 to 20")
}

// switch case example:
let week=5;
switch(week){
    case 1:console.log("this is sunday")
    break
    case 2:console.log("this is monday")
    break
    case 3:console.log("this is tuesday")
    break;
    case 4:console.log("this is wednesday")
    break
    case 5:console.log("this is thursay")
    break
    case 6:console.log("this is friday")
    break
    case 7:console.log("this is saturday")
    break
}
// 
let num=29;
if(num%2==0&&num%3==0){
    console.log("the "+num+" is divisible by 2 and 3 both")
}
else if(num%2==0){
    console.log("the "+num+" is divisible by 2 only")
}
else if(num%3==0){
    console.log("the "+num+" is divisible by 3 only")
}
else{
    console.log("the "+num+" is not divisible by any number")
}

let age2=23;
console.log((age2>18)?("you can drive"):("you can't drive"))