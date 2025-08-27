export function generateRank(value: number): string {
  if (value <= 0) {
    return "[error]";
  }

  const suffixes: string[] = ["th", "st", "nd", "rd"];
  let suffix: string = "th";
  const mod100 = value % 100;

  if (mod100 < 11 || mod100 > 13) {
    const mod10 = value % 10;

    if (mod10 >= 1 && mod10 <= 3) {
      suffix = suffixes[mod10];
    }
  }

  return value + suffix;
}
