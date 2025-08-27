export function getDateFilter(option: string): [string, string] | null {
  const now = new Date();

  const format = (date: Date) => date.toDateString();

  const startOfWeek = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const firstDay = new Date(date);
    firstDay.setDate(diff);
    return firstDay;
  };

  const startOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);

  const endOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);

  switch (option) {
    case "all":
      return null;

    case "today":
      return [format(now), format(now)];

    case "last_day": {
      const lastDay = new Date();
      lastDay.setDate(now.getDate() - 1);
      return [format(lastDay), format(lastDay)];
    }

    case "week": {
      const first = startOfWeek(now);
      const last = new Date(first);
      last.setDate(first.getDate() + 6);
      return [format(first), format(last)];
    }

    case "last_week": {
      const lastWeek = new Date();
      lastWeek.setDate(now.getDate() - 7);
      const first = startOfWeek(lastWeek);
      const last = new Date(first);
      last.setDate(first.getDate() + 6);
      return [format(first), format(last)];
    }

    case "month": {
      const first = startOfMonth(now);
      const last = endOfMonth(now);
      return [format(first), format(last)];
    }

    case "last_month": {
      const lastMonth = new Date(now);
      lastMonth.setMonth(now.getMonth() - 1);
      const first = startOfMonth(lastMonth);
      const last = endOfMonth(lastMonth);
      return [format(first), format(last)];
    }

    case "30_day_ago": {
      const past = new Date(now);
      past.setDate(now.getDate() - 30);
      return [format(past), format(now)];
    }

    case "60_day_ago": {
      const past = new Date(now);
      past.setDate(now.getDate() - 60);
      return [format(past), format(now)];
    }

    case "90_day_ago": {
      const past = new Date(now);
      past.setDate(now.getDate() - 90);
      return [format(past), format(now)];
    }

    case "edit":
    case "undefined":
    default:
      return null;
  }
}
