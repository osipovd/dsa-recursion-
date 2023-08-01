/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1; 
  } else {
    const lastNum = nums.pop();
    return lastNum * product(nums);
  }
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0; 
  } else {
    const firstWord = words[0];
    const restOfWords = words.slice(1);
    const restLongest = longest(restOfWords); 
    return Math.max(firstWord.length, restLongest); 
  }
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str; 
  } else {
    return str[0] + everyOther(str.slice(2)); 
  }
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true; 
  } else {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    if (firstChar !== lastChar) {
      return false; 
    } else {
      return isPalindrome(str.slice(1, -1)); 
    }
  }
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex >= arr.length) {
    return -1; 
  } else if (arr[currentIndex] === val) {
    return currentIndex; 
  } else {
    return findIndex(arr, val, currentIndex + 1); 
  }
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str; 
  } else {
    const lastChar = str[str.length - 1];
    const restOfStr = str.slice(0, -1);
    return lastChar + revString(restOfStr); 
  }
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      result.push(value); 
    } else if (typeof value === 'object' && value !== null) {
      result = result.concat(gatherStrings(value)); 
    }
  }

  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; 
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) {
    return middle; 
  } else if (arr[middle] < val) {
    return binarySearch(arr, val, middle + 1, end); 
  } else {
    return binarySearch(arr, val, start, middle - 1); 
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
