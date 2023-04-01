import { useState } from "react";
import SearchBar from "./SearchBar";
import { BiMap } from "react-icons/bi";
import { getDayName } from "../service/date-service";

const Sidebar = ({ info, units }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-slate-800 py-7 px-5 md:px-10 min-h-screen md:min-w-[40%] lg:min-w-[30%] flex flex-col gap-10 justify-between">
      <SearchBar />

      <div className="flex flex-col gap-10">
        <img
          src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
          alt=""
          className="m-auto"
        />
        <div className="text-3xl md:text-4xl lg:text-5xl text-center">
          {info.main.temp} {units == "metric" ? "°C" : "°F"}
        </div>
        <div className="font-bold text-neutral-400 text-lg md:text-2xl lg:text-3xl text-center">
          {info.weather[0].main}
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-4">
          <p>Today</p> <p>⋅</p> <p>{getDayName()}</p>
        </div>
        <p className="flex items-center gap-2">
          <BiMap /> {info.name}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
