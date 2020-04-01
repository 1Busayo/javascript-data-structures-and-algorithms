/**
 * Iterate through the array and find an element,
 * Time Complexity O(n)
 * @param {array} array The array to iterate over
 * @param {number} n The value to find
 * @returns {boolean} Returns true if n is found in the array and false otherwise
 * @example
 * linearSearch([1, 2, 3], 2) // returns true
 * linearSearch([1, 2, 3], 4) // returns false
 */
function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}
