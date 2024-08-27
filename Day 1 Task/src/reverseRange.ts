export function* reverseRange(
  start: number,
  end: number,
  step: number = 1
): Generator<number, void, unknown> {
  for (let i = end - 1; i >= start; i -= step) {
    yield i;
  }
}
