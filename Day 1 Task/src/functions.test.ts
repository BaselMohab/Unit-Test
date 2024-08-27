import {
  multiply,
  divide,
  toUpperCase,
  isAnagram,
  findMin,
  filterByPrefix,
  snakeToCamelCase,
} from "./functions";

test("multiplies 4 * 3 to equal 12", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("divides 20 by 4 to equal 5", () => {
  expect(divide(20, 4)).toBe(5);
});

test("returns null when dividing by 0", () => {
  expect(divide(10, 0)).toBeNull();
});

test("converts the string to uppercase", () => {
  expect(toUpperCase("hello")).toBe("HELLO");
});

test("checks if two strings are anagrams", () => {
  expect(isAnagram("listen", "silent")).toBe(true);
  expect(isAnagram("hello", "world")).toBe(false);
});

test("finds the minimum number in array", () => {
  expect(findMin([7, 3, 9, 1])).toBe(1);
});

test("filters strings in the array by prefix", () => {
  const arr = ["apple", "apricot", "banana", "avocado"];
  expect(filterByPrefix(arr, "ap")).toEqual(["apple", "apricot"]);
});

test("converts snake_case to camelCase", () => {
  expect(snakeToCamelCase("hello_world")).toBe("helloWorld");
  expect(snakeToCamelCase("make_snake_case")).toBe("makeSnakeCase");
});
