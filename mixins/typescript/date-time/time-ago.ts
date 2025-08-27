export function timeAgo(date: Date | string | number): string {
  const now = new Date();
  const past: Date = date instanceof Date ? date : new Date(date);
  const seconds: number = Math.floor((now.getTime() - past.getTime()) / 1000);

  const units = [
    { label: "year", sec: 31536000 },
    { label: "month", sec: 2592000 },
    { label: "week", sec: 604800 },
    { label: "day", sec: 86400 },
    { label: "hour", sec: 3600 },
    { label: "minute", sec: 60 },
    { label: "second", sec: 1 },
  ];

  for (const unit of units) {
    const count: number = Math.floor(seconds / unit.sec);
    if (count > 0) {
      return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
