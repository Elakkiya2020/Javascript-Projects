/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 6, 5, 9, 9,3,3,4,2,10, 33];

let difference = (function (arr) {
//remove duplicates with Set
//pass set back to an array
//numerical sort
//calculate diference between firt and last digits 
let answer =Array.from(new Set(arr)).sort((a,b)=> (b-a));
return answer[0] -answer[answer.length -1];




})(numbers);

console.log(difference);