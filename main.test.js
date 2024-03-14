import { test, expect } from "vitest";
import { reorderNames } from "./main.js";

// MVP 1

// Test Case 1
test("should return same array", () => {
  // Arrange
  const expected = ["Neal"];
  // Act
  const actual = reorderNames(["Neal"]);
  // Assert
  expect(actual).toStrictEqual(expected);
});

// Test Case 2
test("should return the same array", () => {
  const expected = ["Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 3
test("should return the names in the correct order", () => {
  const expected = ["Neal", "Peter"];
  const actual = reorderNames(["Peter", "Neal"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 4
test("should return the names in the correct order", () => {
  const expected = ["Sara", "Kate", "Elizabeth", "Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Elizabeth", "Sara", "Kate"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 5
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Elizabeth", "Neal", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Elizabeth", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 6
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Mozzie", "Kate", "Neal"];
  const actual = reorderNames(["Neal", "Kate", "Mozzie", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 7
test("should return the names in the correct order", () => {
  const expected = ["Diana", "Sara", "Neal", "Rodger", "Peter"];
  const actual = reorderNames(["Neal", "Peter", "Rodger", "Sara", "Diana"]);
  expect(actual).toStrictEqual(expected);
});

// Test Case 8
test("should return the names in the correct order", () => {
  const expected = ["Sara", "Dora", "Nora", "Elizabeth", "Peter"];
  const actual = reorderNames(["Nora", "Dora", "Peter", "Elizabeth", "Sara"]);
  expect(actual).toStrictEqual(expected);
});

// MVP 2
