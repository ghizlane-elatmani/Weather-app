import React from "react";

const Forecast = () => {
  return (
    <div className="grow py-5 px-5 md:px-10 lg:px-[11rem] bg-slate-900">
      {/* Celcius | Fahrenheit*/}
      <div className="flex justify-end gap-5">
        <button>C</button>
        <button>F</button>
      </div>

      {/* Weather 5 days */}
      <ul>
        <li></li>
      </ul>

      {/* Today's Hightlights */}
    </div>
  );
};

export default Forecast;
