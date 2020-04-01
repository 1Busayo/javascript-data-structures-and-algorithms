import { merge } from "./utils/merge";

/**
 * Sort an array,
 * Time Complexity O(nLog*n),
 * Space Complexity O(n)
 * @param {number[]} array The array to sort
 * @returns {number[]} Returns the sorted array
 * @example
 * mergeSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */
function mergeSort(array) {
  if (array.length < 2) {
    return array; // Base case: array is now sorted since it's just 1 element
  }

  let midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
