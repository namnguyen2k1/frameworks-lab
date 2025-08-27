export function getDayOfWeek(input: Date | string | number): string {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  return dayNames[date.getDay()];
}
