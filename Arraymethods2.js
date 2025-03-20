let arr=[1,3,6,7,9]
// splice(starting index no.,no. of elements deleted from given index number)
console.log(arr.splice(1,2)) //--> two elements remove at index no.1
console.log(arr)
console.log(arr.splice(1,2,111,222)) // --> two elements remove from index-1 and add 111 and 222 on this place.
console.log(arr)
console.log(arr.splice(1,2,111)) // --> two elements remove from index-1 and add 111 on this place.
console.log(arr)