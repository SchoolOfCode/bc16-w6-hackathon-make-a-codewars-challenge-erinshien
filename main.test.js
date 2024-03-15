import { test, expect } from "vitest";
import { reorderNames, reorderFullNames } from "./main.js";

// MVP 1
// Sort an array of strings in alphabetical order by the final letter in each string

// Test Case 1
// An array of one name
test("should return same array", () => {
  // Arrange
  const expected = ["Neal"];
  // Act
  const actual = reorderNames(["Neal"]);
  // Assert
  expect(actual).toStrictEqual(expected);
});

// Test Case 2
// An array of two names in the correct order
test("should return the same array", () => {
  const expected = ["Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 3
// An array of two names in an incorrect order
test("should return the names in the correct order", () => {
  const expected = ["Neal", "Peter"];
  const actual = reorderNames(["Peter", "Neal"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 4
// An array of five names in an incorrect order
test("should return the names in the correct order", () => {
  const expected = ["Sara", "Kate", "Elizabeth", "Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Elizabeth", "Sara", "Kate"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 5
// An array of five names with two names that have the same last letter
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Elizabeth", "Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Elizabeth", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 6
// An array of five names with two sets of names that have the same last letter
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Mozzie", "Kate", "Neal"];
  const actual = reorderNames(["Neal", "Kate", "Mozzie", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 7
// An array of five names with two names that have the same two last letters
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Neal", "Rodger", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Rodger", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 8
// An array of five names with two names that have all the same letters except the first letter
test("should return the names in the correct order", () => {
  const expected = ["Sara", "Dora", "Nora", "Elizabeth", "Peter"];
  const actual = reorderNames(["Nora", "Dora", "Peter", "Elizabeth", "Sara"]);
  expect(actual).toStrictEqual(expected);
});

// MVP 2 - highlight and un-comment the tests below to attempt the second kata in `main.js`
// Sort an array of first and last names in alphabetical order by the final letter of the first name

// // Test Case 1
// // An array of one name
// test("should return same array", () => {
//   const expected = ["Jessica Day"];
//   const actual = reorderFullNames(["Jessica Day"]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 2
// // An array of two names in the correct order
// test("should return the same array", () => {
//   const expected = ["Jessica Day", "Cecelia Parekh"];
//   const actual = reorderFullNames(["Jessica Day", "Cecelia Parekh"]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 3
// // An array of two names in an incorrect order
// test("should return the names in the correct order", () => {
//   const expected = ["Jessica Day", "Nicholas Miller"];
//   const actual = reorderFullNames(["Nicholas Miller", "Jessica Day"]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 4
// // An array of five names in an incorrect order
// test("should return the names in the correct order", () => {
//   const expected = [
//     "Jessica Day",
//     "Paul Genzlinger",
//     "Sam Sweeney",
//     "Winston Schmidt",
//     "Nicholas Miller",
//   ];
//   const actual = reorderFullNames([
//     "Jessica Day",
//     "Nicholas Miller",
//     "Paul Genzlinger",
//     "Winston Schmidt",
//     "Sam Sweeney",
//   ]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 5
// // An array of five names with two first names that have the same last letter
// test("should return the names in the correct order", () => {
//   const expected = [
//     "Jessica Day",
//     "Cecelia Parekh",
//     "Sam Sweeney",
//     "Winston Schmidt",
//     "Nicholas Miller",
//   ];
//   const actual = reorderFullNames([
//     "Jessica Day",
//     "Nicholas Miller",
//     "Cecelia Parekh",
//     "Winston Schmidt",
//     "Sam Sweeney",
//   ]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 6
// // An array of five names with two sets of first names that have the same last letter
// test("should return the names in the correct order", () => {
//   const expected = [
//     "Jessica Day",
//     "Cecelia Parekh",
//     "Sam Sweeney",
//     "Abby Day",
//     "Aly Nelson",
//   ];
//   const actual = reorderFullNames([
//     "Jessica Day",
//     "Abby Day",
//     "Cecelia Parekh",
//     "Aly Nelson",
//     "Sam Sweeney",
//   ]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 7
// // An array of five names with two first names that have the same two last letters
// test("should return the names in the correct order", () => {
//   const expected = [
//     "Cecelia Parekh",
//     "Aria Day",
//     "Sam Sweeney",
//     "Winston Schmidt",
//     "Nicholas Miller",
//   ];
//   const actual = reorderFullNames([
//     "Aria Day",
//     "Nicholas Miller",
//     "Cecelia Parekh",
//     "Winston Schmidt",
//     "Sam Sweeney",
//   ]);
//   expect(actual).toStrictEqual(expected);
// });

// // Test Case 8
// // An array of five names with two first names that have all the same letters except the first letter
// test("should return the names in the correct order", () => {
//   const expected = [
//     "Jessica Day",
//     "Sam Sweeney",
//     "Jason Genzlinger",
//     "Mason Miller",
//     "Winston Schmidt",
//   ];
//   const actual = reorderFullNames([
//     "Jessica Day",
//     "Mason Miller",
//     "Jason Genzlinger",
//     "Winston Schmidt",
//     "Sam Sweeney",
//   ]);
//   expect(actual).toStrictEqual(expected);
// });
