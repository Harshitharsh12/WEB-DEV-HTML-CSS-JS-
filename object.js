// we can make an object also like this:
// object creation with the help of constructor by using javascript keyword "new":
const obj1 = new Object(); //--> it is called a singleton object
// object creation with he help of literals:
//  const obj1={}  //--> it is not a singleton object.
console.log(obj1);
obj1.name = "Harshit";
obj1.class = "BCA";
obj1.age = 19;
console.log(obj1);
console.log(obj1.class);
console.log(obj1["class"]);
const obj2 = {
  name: "Lalit",
  class: "MCA",
};
// merging of two objects:
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); //--> same elements are not merging.
// console.log(typeof obj1);
