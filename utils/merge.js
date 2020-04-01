/**
 * Merge an array
 * @param {number[]} leftArray The left array
 * @param {number[]} rightArray The right array
 * @returns {number[]} Returns the merged array
 */

function merge(leftArray, rightArray) {
  let results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftArray.length && rightArray < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      results.push(leftArray[leftIndex++]);
    } else {
      results.push(rightArray[rightIndex++]);
    }
  }

  let leftRemains = leftArray.slice(leftIndex),
    rightRemains = leftArray.slice(rightIndex);

  // add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}

export { merge };
