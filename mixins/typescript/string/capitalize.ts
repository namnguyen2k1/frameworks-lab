export function capitalize(value: string): string {
  if (!value) {
    return "";
  }

  return value[0].toUpperCase() + value.slice(1);
}
