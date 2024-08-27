import { reverseRange } from "./reverseRange";

describe("reverseRange generator behavior", () => {
  test("generates numbers in descending order with a default step of 1", () => {
    const result = Array.from(reverseRange(0, 5));
    expect(result).toEqual([4, 3, 2, 1, 0]);
  });

  test("generates numbers in descending order with a specified step value", () => {
    const result = Array.from(reverseRange(0, 10, 2));
    expect(result).toEqual([9, 7, 5, 3, 1]);
  });

  test("returns an empty array when start and end are identical", () => {
    const result = Array.from(reverseRange(5, 5));
    expect(result).toEqual([]);
  });

  test("returns an empty array when start is less than end with a positive step", () => {
    const result = Array.from(reverseRange(0, 5, 2));
    expect(result).toEqual([4, 2, 0]);
  });

  test("returns an empty array when a negative step is provided", () => {
    const result = Array.from(reverseRange(0, 10, -2));
    expect(result).toEqual([]); 
  });
});
