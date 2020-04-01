/**
 * Binary search through the array and find an element,
 * Time Complexity O(log n)
 * @param {number[]} array The array to search
 * @param {number} n The value to find
 * @returns {number} Returns the index at which n was found or -1 otherwise
 * @example
 * binarySearch([1, 2, 3, 4, 5], 4) // returns 3
 * binarySearch([1, 2, 3, 4, 5], 6) // returns -1
 */
function binarySearch(array, n) {
  let lowIndex = 0,
    highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return -1;
}
