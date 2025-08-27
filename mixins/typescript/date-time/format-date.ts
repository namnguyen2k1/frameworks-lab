export function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const session = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${session}`;
}
