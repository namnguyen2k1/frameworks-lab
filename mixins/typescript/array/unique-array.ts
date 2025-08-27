export function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export function uniqueArray2<T>(array: any[]): T[] {
  const listString = array.map((obj) => JSON.stringify(obj));
  const set = new Set(listString);
  const uniqueArray: T[] = Array.from(set).map((str) => JSON.parse(str));

  return uniqueArray;
}
