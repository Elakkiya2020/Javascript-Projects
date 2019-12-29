/**
 * Quirky operators and precedence in JavaScript
 * What is the output of these three lines and why?
 */

let first = (! + [] * []);
console.log( !+[] );
// 0 to boolean became false to true *[] =1 *0=0
let second = (! + [] + [] * []);
// true +[] *[]
//true+0*0
//true + 0 ==1+0

let third = (!+[] + [] + ![]).length;

// true + [] + false
//truefale.length =9
console.log(!+[]);

console.log(first);
console.log(second);
console.log(third);