// class animal{
// or
class Animal {
  a = 67;
  b = 98;
  c = 890;
  // constructor:
  constructor() {
    console.log("Every animal have a body");
  }

  eats() {
    console.log("Animal can eats");
  }
  drinks() {
    console.log("Animals can drink");
  }
  sum() {
    return this.a;
  }
}
let obj1 = new Animal();
console.log(obj1);
obj1.eats();
obj1.drinks();
console.log(obj1.sum());
console.log(obj1.a);
console.log(obj1.b);
// console.log(a) -->here the object is not directly access the class variables.
// console.log(b) -->here the object is not directly access the class variables.

Animal.d = 889;
Animal.prototype.run = function () {
  console.log(`Every Animal can Run!!`);
};
// console.log(Animal.d);
// console.log(obj1.d); --> wrong undefined
obj1.run();

obj1.value = 990;
obj1.sound = function () {
  console.log("Every Animal have different Sounds");
};
console.log(obj1.value);
obj1.sound();

Object.prototype.creature = function () {
  console.log("Every Animal is A Creature");
};
Object.prototype.istrue = true;

Animal.creature();
obj1.creature();
console.log(Animal.istrue);
console.log(obj1.istrue);
