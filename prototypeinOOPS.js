let myheros = ["thor", "ironman"];
let HeroPowers = {
  thor: "hammer",
  ironman: "iron suit",
  ironmanPower: function () {
    // console.log(`the power of Ironman is: ${HeroPowers.ironman}`);
    console.log(`the power of Ironman is: ${this.ironman}`);
  },
};
HeroPowers.captainAmerica = "shield";
HeroPowers.thorPower = function () {
  console.log(`the Thor Power is His ${this.thor}`);
};
Object.prototype.captainPower = function () {
  console.log(`Captain Power is his ${HeroPowers.captainAmerica}`);
};
Array.prototype.heroName = function () {
  console.log(`Hero name is thor`);
};
myheros.newhero = function () {
  console.log(`Hulk is the new Hero!!`);
};
HeroPowers.ironmanPower();
console.log(HeroPowers.captainAmerica);
HeroPowers.thorPower();
HeroPowers.captainPower();
myheros.captainPower();
// myheros.thorPower(); --> error
// myheros.ironmanPower(); --> error
myheros.heroName();
// HeroPowers.heroName();--> error
myheros.newhero();

const name1 = "Harshit    ";
String.prototype.truelength = function () {
  console.log(this.trim().length);
};
name1.truelength();

// Inheritance by __proto__
const person = {
  name: "harshit",
  id: 30,
  fathername: function () {
    console.log("father name is Ram Singh.");
  },
};
person.mothername = function () {
  console.log("Mother name is Rama devi.");
};
const student = {
  class: 8,
  school: "dav",
};
console.log(person.id);
person.fathername();
person.mothername();
// console.log(student.id);  --> error
// student.fathername();--> error
// student.mothername();--> error
// console.log(person.school); --> error

// person.__proto__ = student; // here all properties of student object is inherit or comes in the person object.
// console.log(person.school);
// console.log(student.id); --> error
student.__proto__ = person; // here all properties of person object is inherit or comes in the student object.
console.log(student.id);
student.fathername();
student.mothername();
// console.log(person.school);--< error

// note: at a time we can only inherit one onject to another by proto
