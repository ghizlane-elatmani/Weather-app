import React from "react";

const Card = ({ dayName, day, units, index }) => {
  if (!day || !day[3]) {
    return <></>;
  }

  return (
    <li className="min-w-[100px] bg-slate-800 p-2 rounded-sm flex flex-col items-center gap-2">
      <p>{index === 1 ? "Tomorrow" : dayName}</p>

      <img
        src={`https://openweathermap.org/img/wn/${day[3].weather[0].icon}@2x.png`}
        alt=""
      />

      <div className="flex gap-4 text-sm lg:text-base">
        <div>
          {day[3].main.temp_max.toFixed(0)} {units === "metric" ? "°C" : "°F"}
        </div>
        <div className="text-neutral-400">
          {day[3].main.temp_min.toFixed(0)}
          {units === "metric" ? "°C" : "°F"}
        </div>
      </div>
    </li>
  );
};

export default Card;
