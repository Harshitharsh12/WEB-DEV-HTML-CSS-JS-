// loops in javascript:
let i = 1;
let k = 1;
while (i <= 1000) {
  console.log(i);
  i++;
}
/*do{
    
        console.log(k)
        k++;
    }
    while(k<=100)
    or  */
do {
  console.log(k);
  k++;
} while (k <= 100);
for (j = 1; j <= 10; j++) {
  console.log(j);
}
let obj = {
  name: "harsha",
  role: "developer",
};
// forin loop
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         // console.log(key)
//         // console.log(element)
//         console.log(key,element)
//     }
// }      or
for (const key in obj) {
  const element = obj[key];
  // console.log(key)
  // console.log(element)
  console.log(key, element);
}

//forof loop
for (const c of "Harsha") {
  console.log(c);
}
let s = "kaira";
for (const c of s) {
  console.log(c);
}
