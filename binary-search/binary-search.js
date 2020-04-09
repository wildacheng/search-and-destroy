"use strict";

// Complete this algo
// eslint-disable-next-line complexity
const binarySearch = (array, target) => {
  if (!target || !array) {
    return false;
  }
  let midPoint = Math.floor(array.length / 2); // root
  let firstHalf = array.slice(0, midPoint); // left side with lower numbers
  let secondHalf = array.slice(midPoint); // right side with higher numbers

	console.log(array, "HELLO")
	console.log(array[midPoint] === target)
	if (target === array[midPoint]) {
		return true
	}

	if (array.length === 1){
		return false
	}
	if (target < array[midPoint]) {
		return binarySearch(firstHalf, target);
	} else if (target > array[midPoint]) {
		return binarySearch(secondHalf, target);
	}


};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

//COMMENTS
//Should run in  O(log(n)) time! aka while loop
//takes a alrdy sorted array & target number
//returns true if the target is in the array and false if not
//at the beginning check for target arg !== defined return false
//Check if target number is negative or positive
//edge case array typeOf number or string / uppercase or lower
