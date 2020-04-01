import { quickSelectInPlace } from "./utils/quickSelectInPlace";

/**
 * Quick select from an array
 * Time Complexity O(n*2)
 * Space Complexity O(1)
 * @param {number[]} array The array to sort
 * @example
 * quickSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */

function medianQuickSelect(array) {
  return quickSelectInPlace(
    array,
    0,
    array.length - 1,
    Math.floor(array.length / 2)
  );
}
