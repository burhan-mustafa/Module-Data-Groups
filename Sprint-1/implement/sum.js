function sum(elements) {
  const sortedArr = elements.filter((item) => typeof item === "number");
  if (sortedArr.length === 0) {
    return 0;
  }
  const total = sortedArr.reduce((total, num) => total + num, null);
  return total;
}

module.exports = sum;
