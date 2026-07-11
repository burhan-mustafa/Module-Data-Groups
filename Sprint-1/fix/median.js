// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  const sortedArr = list
    .filter((item) => typeof item === "number")
    .toSorted((a, b) => a - b);

  if (sortedArr.length < 2) {
    return null;
  }

  const middleIndex = Math.floor(sortedArr.length / 2);
  const evenMedian = (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;

  if (sortedArr.length % 2 == 0) {
    return evenMedian;
  }
  const oddMedian = sortedArr.splice(middleIndex, 1)[0];
  return oddMedian;
}

module.exports = calculateMedian;
