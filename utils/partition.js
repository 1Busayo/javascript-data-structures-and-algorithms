/**
 * Partition an array
 * @param {number[]} array The array to sort
 * @param {number} left The left partition of the array
 * @param {number} right The right partition of the array
 * @returns {number[]} Returns left partition of the array
 */

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

export { partition };
