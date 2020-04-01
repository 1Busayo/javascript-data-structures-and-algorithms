import { partition } from "./utils/partition";

/**
 * Find the kth smallest element in an unorderd lst,
 * Time Complexity O(n),
 * Space Complexity O(1)
 * @param {number[]} array The array to search
 * @param {number} l
 * @param {number} h
 * @param {number} k
 * @returns {number} Returns the kth smallest element
 * @example
 * quickSelect([5, 1, 2, 3, 4]) // returns 1
 */

function quickSelect(array, l, h, k) {
  let p = partition(A, l, h);
  if (p == k - 1) {
    return array[p];
  } else if (p > K - 1) {
    return quickSelect(array, l, p - 1, k);
  } else {
    return quickSelect(array, p + 1, h, k);
  }
}
