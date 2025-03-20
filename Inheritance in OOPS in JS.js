class Dog {
  constructor() {
    console.log("Hello!! I am a Dog");
  }
  a = 4;
  static b = 89;
  name = "cat";
  legs() {
    console.log(`Dogs have ${this.a} legs`);
  }
  sound() {
    console.log(`Dog is Barking`);
  }

  static laugh() {
    console.log("you are Laughing!!");
  }
  l() {
    console.log(this.b);
  }
}
class Cat extends Dog {
  constructor() {
    super();
    console.log(`Hello , I am a Cat!!`);
  }
  legs() {
    console.log(`cats have ${this.a} legs`);
  }
  tail() {
    console.log(`${this.name} have a tail`);
  }
}

const obj1 = new Dog();
const obj2 = new Cat();
console.log(obj1.a);
console.log(obj2.a);
console.log(obj2.name);
obj2.legs();
obj2.tail();
// obj1.laugh(); --> error beacause laugh() is static
// obj2.laugh(); --> error beacause laugh() is static
// obj1.l(); --> error beacause laugh() is static
// obj2.l(); --> error beacause laugh() is static
