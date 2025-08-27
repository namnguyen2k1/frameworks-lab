export function generateCommasNumber(value: number, separator: string = ","): string {
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  return value.toString().replace(regex, separator);
}
