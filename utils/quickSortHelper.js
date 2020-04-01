import { partition } from "./partition";

/**
 * Helper for the quickSort function
 * @param {number[]} array The array to sort
 * @param {number} left The left partition of the array
 * @param {number} right The right partition of the array
 * @returns {number[]} Returns the sorted array
 */

function quickSortHelper(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSortHelper(array, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(array, index, right);
    }
  }
  return array;
}

export { quickSortHelper };
