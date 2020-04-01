/**
 * Sort an array,
 * Time Complexity O(k+n)
 * Space Complexity O(k)
 * @param {number[]} array The array to sort
 * @returns {number []} Returns the sorted array
 * @example
 * countSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */

function countSort(array) {
  let hash = {},
    countArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = i;
    } else {
      hash[array[i]]++;
    }
  }
  for (const key in hash) {
    // for any number of _element, add t to array
    for (var i = 0; i < hash[key]; i++) {
      countArray.push(parseInt(key));
    }
  }
  return countArray;
}
