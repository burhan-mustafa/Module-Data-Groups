module.exports = dedupe;

function dedupe(arr) {
  const dedupedArr = [...new Set(arr)];
  return dedupedArr;
}
