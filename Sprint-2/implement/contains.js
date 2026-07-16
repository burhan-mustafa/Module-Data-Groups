function contains(obj, key) {
  if (Object.keys(obj).length === 0) {
    return false;
  } else if (key in obj) {
    return true;
  } else {
    return false;
  }
}
module.exports = contains;
