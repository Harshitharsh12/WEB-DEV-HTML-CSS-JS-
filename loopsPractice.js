let obj = {
  name: "Harshiot",
  id: 12,
};
let arr = [23, 45, 76789, 90];
let s = "Harshit";
for (const value of s) {
  console.log(value);
}
arr.forEach((v, i, a) => {
  console.log(v, i, a);
});
