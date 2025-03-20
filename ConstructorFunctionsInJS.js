function userData(name, id, salary, post, s) {
  // console.log(this);
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.post = post;
  // this.stream = s
  this.greeting = function () {
    console.log(`Welcome ${this.name}`);
  };
  // return this;
}
userData.stream = "cs";
userData.prototype.hello = function () {
  console.log("hello all!");
};

const obj1 = new userData("harshit", 90, "80k", "Software Engineer", "cs");
const obj2 = new userData("harsh", 40, "50k", "Web Developer", "cs");
obj1.lname = "kaira";
obj1.hi = function () {
  console.log("Hi");
};
console.log(obj1);
// console.log(obj2);
obj2.greeting();
console.log(obj1.lname);
obj1.hi();
console.log(userData.stream);
// console.log(obj1.stream);---> undefined
obj1.hello();
// console.log(this);
