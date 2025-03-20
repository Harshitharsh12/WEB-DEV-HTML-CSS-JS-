let arr =[23,54,67,89,90]
let arr1 =[233,54,67,89,90]
let arr2 =[23.9,4,"Harsha",67,9]
let arr3=["harshit","kaira","apple","banana"]
let arr4=["harshit","kaira","apple","banana"]
let arr5=[11,2,4,6,77]
let arr6=[]
//1. toString() method:--> to make a string of a given array
console.log(arr)
console.log(arr.toString())
// Array.from():---> to make an array of a given string.
console.log(Array.from("harsha"))
//2. join(character):
console.log(arr.join(" and "))
// or
console.log(arr.join(' and '))
console.log(arr.join(" or "))
//or
console.log(arr.join(' or '))
// 3. push(element): --> add a new element always at last in array and returns the new updated
//  size of array.
console.log(arr.push(100)) 
console.log(arr)
arr.push("Harsha")
console.log(arr)
//4.pop() --> remove always last element from array and return that deleted element
console.log(arr.pop())
console.log(arr)
//5. shift() --> remove always first element from array and return that deleted element
console.log(arr.shift())
console.log(arr)
//6. unshift(element):--->add a new element always at first in array and returns the new updated
//  size of array.
console.log(arr.unshift("kaira"))
console.log(arr)
arr.unshift(56)
console.log(arr)
//7. delete array name[index number]: --> delete the item for the specified index number but not 
// remove after the delete method it always allocate memory so it's give undefined that index number.
delete arr[3]
console.log(arr)
console.log(arr[3])
//8. concat(array1,array2,--------,array n)
console.log(arr1.concat(arr2)) // --> this method is a method which is not change any array it returns
//  a new array which means it is an exception in mutable property of an array.
// 9. sort()  ----> in sort method it is only work in the String and mix type array,In the string type array
// it sort the array according to alphabet and in mix type array the numbers comes first and than alphabates.
// and returns the new sorted array and in the int type array it is always produce wrong result,beacuse
// it takes numbers  as a string and in "100" and "20" thye 1 is less than 2 so the 100 comes first and 
// than 20.
console.log(arr1.sort())
console.log(arr1)
console.log(arr2.sort())
console.log(arr2)
console.log(arr.sort())
console.log(arr)
console.log(arr3.sort())
console.log(arr3)
// 10. toSorted() ----> the toSorted method is similar to the sort method but the difference is that
// the toSorted() method doesn't alter or change the original array but returns a new array.which means 
// it is an exception in mutable property of an array.
console.log(arr4.toSorted())
console.log(arr4)
// Note: If we want to sort an array without any changing in the previous array we use the toSorted().
// 11. reverse() : ---> It return a new reversed array
console.log(arr4.reverse())
console.log(arr4)
console.log(arr)
console.log(arr.reverse())
//toReversed():the toReversed method is similar to the reverse method but the difference is that
// the toReversed() method doesn't alter or change the original array but returns a new array.which means 
// it is an exception in mutable property of an array.
console.log(arr4.toReversed())
console.log(arr4)
// 12. numeric sort for integer type array:
// for accending order:
console.log(arr5.sort(function(a,b){return a-b}))
console.log(arr5)
// for decending order:
console.log(arr5.sort(function(a,b){return b-a}))
console.log(arr5)