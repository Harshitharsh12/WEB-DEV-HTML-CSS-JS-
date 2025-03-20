// factory function: factory functions are the functions that return an object

function getUserData(firstName, lastName, age) {
  const user = {
    firstName,
    // or
    // firstName:firstName
    lastName,
    // or
    // lastName:lastName
    age,
    // or
    // age :age
    getYearOfBirth() {
      return new Date().getFullYear() - user.age;
    },
    // or
    // getYearOfBirth: function getYearofBirth() {
    //   return new Date().getFullYear() - user.age
    // }
  };
  return user;
}
const a = getUserData("Harshit", "Kaira", 21);
console.log(a);
console.log(`Year Of Birth: ${a.getYearOfBirth()}`);
const b = getUserData("Yogesh", "Kaira", 19);
console.log(b);
console.log(`Year Of Birth: ${b.getYearOfBirth()}`);
