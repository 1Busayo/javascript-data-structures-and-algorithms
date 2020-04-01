// iterate through the array and find
// time complexity O(n)
function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}
