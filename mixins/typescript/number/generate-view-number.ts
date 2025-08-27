export function generateViewNumber(value: number): string {
  if (value < 1000) {
    return value.toString();
  }

  const suffixes: string[] = ["", "k", "m", "b", "t"];
  let suffixIndex: number = 0;
  let shortValue: number = value;

  while (shortValue >= 1000 && suffixIndex < suffixes.length - 1) {
    shortValue /= 1000;
    suffixIndex++;
  }
  shortValue = Math.round(shortValue * 10) / 10;

  return `${shortValue}${suffixes[suffixIndex]}`;
}
