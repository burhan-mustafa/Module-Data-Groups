function findMax(element) {
  const filterArr = element.filter((x) => typeof x === "number");
  const max = Math.max(...filterArr);
  return max;
}

module.exports = findMax;
