/**
 * Swap two elements in an array,
 * Time Complexity O(1)
 * @param {number[]} array The array to search
 * @param {number} index1 The first index
 * @param {number} index2 The second index
 * @example
 * binarySearch([1, 2, 3, 4, 5], 1, 4) // array = [1, 5, 3, 4, 2]
 */
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

export { swap };
