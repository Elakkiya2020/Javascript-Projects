

// removeDups([1, 0, 1, 0]) ➞ [1, 0];

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"];

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"];

function removeDups(arr) {
	 
	return [...new Set(arr)];


}

function removeDups(arr) {
    return arr.filter((x, i, a) => a.indexOf(x) === i);
  }

  function removeDups(arr) {
    var returnArr = [];
    for(var i = 0; i < arr.length; i++) {
      if(returnArr.indexOf(arr[i]) === -1) {
        returnArr.push(arr[i]);
      }
    }
    return returnArr;
  }