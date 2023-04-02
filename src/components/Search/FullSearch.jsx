import React, { useState } from "react";
import { BiSearch, BiX, BiChevronRight } from "react-icons/bi";

const FullSearch = ({ setFullSearch, setCity, setIsLocation }) => {
  const [cityName, setCityName] = useState("");

  function handleSubmit(e) {
    // avoid reload page because it's a form submit
    e.preventDefault();
    setCity(cityName);
    setFullSearch(false);
    setIsLocation(false);
  }

  function handleClick(cityName) {
    setCity(cityName);
    setFullSearch(false);
    setIsLocation(false);
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-slate-800 py-7 px-5 md:px-10">
      {/* CLOSE BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={() => setFullSearch(false)}
          className="bg-slate-800 hover:bg-slate-700 duration w-10 h-10 rounded-full flex justify-center items-center mb-5 md:mb-10"
        >
          <BiX />
        </button>
      </div>

      {/* FORM */}
      <form
        className="flex gap-2 justify-between items-center mb-10 p-2"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center border rounded-sm p-2 flex-1">
          <BiSearch className="" />
          <input
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            type="text"
            placeholder="search location"
            className="overflow-hidden w-full flex-1 px-1 bg-slate-800 focus:outline-0 text-sm lg:text-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-sm text-sm lg:text-md"
        >
          Search
        </button>
      </form>

      {/* SUGGESTIONS */}
      <ul>
        <li
          onClick={() => handleClick("London")}
          className="cursor-pointer group rounded-sm flex justify-between items-center py-3 px-2 border border-slate-800 hover:border-slate-700 mb-4"
        >
          <p>London</p>
          <BiChevronRight className="opacity-0 group-hover:opacity-100" />
        </li>

        <li
          onClick={() => handleClick("Barcelona")}
          className="cursor-pointer group rounded-sm flex justify-between items-center py-3 px-2 border border-slate-800 hover:border-slate-700 mb-4"
        >
          <p>Barcelona</p>
          <BiChevronRight className="opacity-0 group-hover:opacity-100" />
        </li>

        <li
          onClick={() => handleClick("Long Beach")}
          className="cursor-pointer group rounded-sm flex justify-between items-center py-3 px-2 border border-slate-800 hover:border-slate-700 mb-4"
        >
          <p>Long Beach</p>
          <BiChevronRight className="opacity-0 group-hover:opacity-100" />
        </li>
      </ul>
    </div>
  );
};

export default FullSearch;
