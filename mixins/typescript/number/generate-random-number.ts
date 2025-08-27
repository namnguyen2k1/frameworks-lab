export function generateRandomNumber(min: number, max: number): number {
  if (max < min) {
    [min, max] = [max, min];
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
