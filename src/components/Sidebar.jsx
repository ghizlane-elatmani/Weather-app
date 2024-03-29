import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import FullSearch from "./Search/FullSearch";
import { BiMap } from "react-icons/bi";
import { getDayName } from "../service/date-service";

const Sidebar = ({ info, units, setCity, setIsLocation, setLat, setLon }) => {
  const [fullSearch, setFullSearch] = useState(false);

  function handleLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      setIsLocation(true);
    });
  }

  return (
    <div className="bg-slate-800 py-7 px-5 md:px-10 min-h-screen md:min-w-[40%] lg:min-w-[30%] flex flex-col gap-10 justify-between relative">
      {/* SEARCH BAR */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setFullSearch(!fullSearch)}
          className="bg-neutral-500 text-sm lg:text-md hover:bg-neutral-600 duration p-2 px-4 rounded-sm"
        >
          Search for places
        </button>
        <button
          onClick={() => handleLocation()}
          className="bg-neutral-500 hover:bg-neutral-600 duration w-10 h-10 rounded-full flex justify-center items-center"
        >
          <BiCurrentLocation />
        </button>
      </div>

      {/* CURRENT WEATHER INFO */}
      <div className="flex flex-col gap-10">
        <img
          src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
          alt=""
          className="m-auto"
        />
        <div className="text-3xl md:text-2xl lg:text-3xl text-center text-neutral-400">
          <span className="text-6xl text-slate-50">
            {info.main.temp.toFixed(0)}
          </span>{" "}
          {units == "metric" ? "°C" : "°F"}
        </div>
        <div className="font-bold text-neutral-400 text-lg md:text-2xl lg:text-3xl text-center">
          {info.weather[0].main}
        </div>
      </div>

      {/* LOCATION AND DATE */}
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-4">
          <p>Today</p> <p>⋅</p> <p>{getDayName()}</p>
        </div>
        <p className="flex items-center gap-2">
          <BiMap /> {info.name}
        </p>
      </div>

      {/* FULL SEARCH */}
      {fullSearch && (
        <FullSearch
          setFullSearch={setFullSearch}
          setCity={setCity}
          setIsLocation={setIsLocation}
        />
      )}
    </div>
  );
};

export default Sidebar;
