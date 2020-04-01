import { quickSortHelper } from "./utils/quickSortHelper";

/**
 * Sort an array,
 * Time Complexity O(n*2)
 * Space Complexity O(1)
 * @param {number[]} array The array to sort
 * @example
 * quickSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */

function quickSort(array) {
  return quickSortHelper(array, 0, array.length - 1);
}
