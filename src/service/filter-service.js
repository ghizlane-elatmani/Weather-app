// OpenWeatherApi provide you with a free service 5 Day / 3 Hour Forecast
// We need to extract the data correctely and display it on the screen

export function getDays(input) {
  const output = new Map();

  input.forEach((item) => {
    const dayName = getDayName(item.dt * 1000, "en-US");
    output.set(dayName, (output.get(dayName) || []).concat(item));
  });

  return output;
}

const getDayName = (value, locale) => {
  return (
    new Date(value).toLocaleDateString(locale, {
      weekday: "short",
    }) +
    ". " +
    new Date(value).getDate() +
    " " +
    new Date(value).toLocaleDateString(locale, {
      month: "short",
    })
  );
};

export function toTextualDescription(degree) {
  if (degree > 337.5) return "N";
  if (degree > 292.5) return "NW";
  if (degree > 247.5) return "W";
  if (degree > 202.5) return "W";
  if (degree > 157.5) return "S";
  if (degree > 122.5) return "S";
  if (degree > 67.5) return "E";
  if (degree > 22.5) return "NE";
  return "N";
}
