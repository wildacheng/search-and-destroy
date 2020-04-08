'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (!target || !array) {
		return false
	}

	while (array.length) {
		if (array.includes(target)){
			return true
		} else {
		return false
	}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

//COMMENTS
//Should run in  O(log(n)) time! aka while loop
//takes a alrdy sorted array & target number
//returns true if the target is in the array and false if not
//at the beginning check for target arg !== defined return false
//Check if target number is negative or positive
//edge case array typeOf number or string / uppercase or lower
