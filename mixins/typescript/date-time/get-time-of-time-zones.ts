import { LOCALE } from "./locale.enum";
import { TIME_ZONE } from "./timezone.enum";

export function getTimeOfTimeZones(
  timeZone: TIME_ZONE = TIME_ZONE.VIETNAM,
  locale: LOCALE = LOCALE.UNITED_STATES,
): string {
  return new Date().toLocaleTimeString(locale, { timeZone });
}
