const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({ a: 1, b: 2 }, "a") // returns true
E.g. contains({ a: 1, b: 2 }, "c") // returns false
*/

// Given an empty object
// When passed to contains
// Then it should return false
test("given an empty object, returns false", () => {
  const obj = {};
  const key = "A";

  expect(contains(obj, key)).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an existing property, returns true", () => {
  const obj = {
    a: 1,
    b: 2,
  };
  const key = "a";

  expect(contains(obj, key)).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given a non-existent property, returns false", () => {
  const obj = {
    a: 1,
    b: 2,
  };
  const key = "c";

  expect(contains(obj, key)).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given an array instead of an object, returns false", () => {
  const obj = ["a", "b"];
  const key = "a";

  expect(contains(obj, key)).toBe(false);
});
