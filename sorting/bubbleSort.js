import { swap } from "./utils/swap";

/**
 * Sort an array,
 * Time Complexity O(n*2),
 * Space Complexity O(1)
 * @param {number[]} array The array to sort
 * @returns {number[]} Returns the sorted array
 * @example
 * bubbleSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */
function bubbleSort(array) {
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
