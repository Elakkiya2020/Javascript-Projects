//convert string in to numbers

//parseInt(number,radix )to sting default is 10;
//map(al,idx,arr) =>{})

// let result = ['1', '7','11'].map(item => parseInt(item));
// console.log(result);

//1. '1',0 deault is rdix 10
//2. '7',1  is ok rasix is iligale son NAN
//3. 11 ,2 binary radix 00000011 in decimal 3.

//returns [1,Nan,3];

//['1', '7','11'].map(item => parseInt(item));

//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers



var result = ['1', '7', '11'].map(item => parseInt(item)); //returns [1, 7, 11 ]


console.log(result);

var result = ['1', '7', '11'].map(parseInt); //returns [1, NaN, 3]

console.log(result);