import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { TiLocationArrow } from "react-icons/ti";
import { getDays, toTextualDescription } from "../service/filter-service";

const Forecast = ({ units, setUnits, info, infoDays }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (infoDays) setForecast(getDays(infoDays.list));
  }, [infoDays]);

  return (
    <div className="grow py-5 px-5 md:px-10 lg:px-[11rem] bg-slate-900">
      {/* Celcius | Fahrenheit*/}
      <div className="flex justify-end gap-3 mb-10">
        <button
          onClick={() => setUnits("metric")}
          className={`bg-neutral-500 hover:bg-neutral-600 duration w-10 h-10 rounded-full flex justify-center items-center ${
            units == "metric"
              ? "bg-slate-200 text-slate-900 hover:bg-slate-200"
              : ""
          }`}
        >
          °C
        </button>
        <button
          onClick={() => setUnits("imperial")}
          className={`bg-neutral-500 hover:bg-neutral-600 duration w-10 h-10 rounded-full flex justify-center items-center ${
            units == "imperial"
              ? "bg-slate-200 text-slate-900 hover:bg-slate-200"
              : ""
          }`}
        >
          °F
        </button>
      </div>

      {/* Weather 5 days */}
      <CardList forecast={forecast} units={units} />

      {/* Today's Hightlights */}
      <div className="mb-5">
        <h2 className="font-bold text-xl mb-8">Today’s Hightlights </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* CARD: Wind Status */}
          <div className="bg-slate-800 p-4 flex flex-col items-center gap-5 rounded-sm">
            <p>Wind status</p>
            <p className="text-xl">
              <span className="text-4xl md:text-5xl font-bold">
                {info.wind.speed}
              </span>{" "}
              {units == "metric" ? "m/s" : "mph"}
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-neutral-600 rounded-full p-2 rotate-180">
                <TiLocationArrow />
              </div>{" "}
              {toTextualDescription(info.wind.deg)}
            </div>
          </div>

          {/* CARD: Humidity */}
          <div className="bg-slate-800 p-6 flex flex-col items-center justify-between gap-7 rounded-sm">
            <p>Humidity</p>
            <p className="text-xl">
              <span className="text-4xl md:text-5xl font-bold">
                {info.main.humidity}
              </span>{" "}
              %
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
              <div className="absolute w-full flex justify-between -top-5 text-xs text-neutral-400">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>

              <div className="absolute right-0 -bottom-5 text-xs text-neutral-400">
                %
              </div>
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: info.main.humidity + "%" }}
              ></div>
            </div>
          </div>

          {/* CARD: Visibility */}
          <div className="bg-slate-800 p-4 flex flex-col items-center gap-5 rounded-sm">
            <p>Visibility</p>
            <p className="text-xl">
              <span className="text-4xl md:text-5xl font-bold">
                {(info.visibility * 0.00062137).toFixed(2)}
              </span>{" "}
              miles
            </p>
          </div>

          {/* CARD: Air pressure */}
          <div className="bg-slate-800 p-4 flex flex-col items-center gap-5 rounded-sm">
            <p>Air Pressure</p>
            <p className="text-xl">
              <span className="text-4xl md:text-5xl font-bold">
                {info.main.pressure}
              </span>{" "}
              mb
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-neutral-500">
        created by{" "}
        <span className="text-sm text-neutral-400 font-bold">
          ghizlane-elatmani
        </span>{" "}
        - devChallenges.io
      </p>
    </div>
  );
};

export default Forecast;
