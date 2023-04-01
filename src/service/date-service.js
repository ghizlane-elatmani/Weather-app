export function getDayName(date = new Date(), locale = "en-US") {
  return `${date.toLocaleDateString(locale, {
    weekday: "short",
  })}. ${date.getDate()} ${date.toLocaleDateString(locale, {
    month: "short",
  })}`;
}
