/**
 * Sort an array,
 * Time Complexity O(n*2)
 * Space Complexity O(1)
 * @param {number[]} array The array to sort
 * @returns {number []} Returns the sorted array
 * @example
 * insertionSort([5, 1, 2, 3, 4]) // returns [1, 2, 3, 4, 5]
 */

function insertionSort(array) {
  let length = array.length, // number of items in the array
    value, // the value currenlty being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 0; i < length; i++) {
    // store the current value because it may shift later
    value = array[i];

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section
    // over by one. This creates space in which to insert the value.

    for (j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}
