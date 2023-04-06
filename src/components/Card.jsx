import React, { useEffect } from "react";

const Card = ({ dayInfo, isItTomorrow, units }) => {
  useEffect(() => {
    console.log(dayInfo);
  }, []);

  return (
    <li className="min-w-[100px] bg-slate-800 p-2 rounded-sm flex flex-col items-center gap-2">
      <p>{isItTomorrow ? "Tomorrow" : dayInfo[0]}</p>

      <img
        src={`https://openweathermap.org/img/wn/${dayInfo[1][4].weather[0].icon}@2x.png`}
        alt=""
      />

      <div className="flex gap-4 text-sm lg:text-base">
        <div>
          {dayInfo[1][4].main.temp_max.toFixed(0)}{" "}
          {units === "metric" ? "°C" : "°F"}
        </div>
        <div className="text-neutral-400">
          {dayInfo[1][4].main.temp_min.toFixed(0)}
          {units === "metric" ? "°C" : "°F"}
        </div>
      </div>
    </li>
  );
};

export default Card;
