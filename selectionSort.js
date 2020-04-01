import { swap } from "./swap";

/**
 * Sort an array,
 * Time Complexity O(n*2)
 * Space Complexity O(1)
 * @param {number[]} array The array to sort
 * @returns {number []} Returns the sorted array
 * @example
 * selectionSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */

function selectionSort(array) {
  let length = array.length,
    min;

  for (let i = 0; i < length; i++) {
    // set minimum to this position
    min = i;
    // check the reat of the array to see of anyhting is smaller
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // if the minimum isn't in the position, swap it
    if (i != min) {
      swap(array, i, min);
    }
  }
  return array;
}
