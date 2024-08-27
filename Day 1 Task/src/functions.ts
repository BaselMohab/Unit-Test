export const multiply = (a: number, b: number) => a * b;

export const divide = (a: number, b: number) => (b !== 0 ? a / b : null);

export const toUpperCase = (str: string) => str.toUpperCase();

export const isAnagram = (str1: string, str2: string) => {
  const normalize = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
};

export const findMin = (arr: number[]): number => Math.min(...arr);

export const filterByPrefix = (arr: string[], prefix: string): string[] => {
  return arr.filter((str) => str.startsWith(prefix));
};

export const snakeToCamelCase = (str: string) => {
  return str.replace(/(_\w)/g, (m) => m[1].toUpperCase());
};
