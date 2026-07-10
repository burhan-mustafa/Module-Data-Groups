// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const sortedArr = list
    .filter((item) => item != Number)
    .toSorted((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);
  const evenMedian =
    (Math.floor(sortedArr[middleIndex - 1]) +
      Math.floor(sortedArr[middleIndex])) /
    2;

  if (sortedArr.length % 2 == 0) {
    return evenMedian;
  }
  const oddMedian = sortedArr.splice(middleIndex, 1)[0];
  return oddMedian;
}

console.log(calculateMedian([1, 3, 4]));

module.exports = calculateMedian;
