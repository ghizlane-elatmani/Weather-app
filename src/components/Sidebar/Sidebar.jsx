import React, { useState } from "react";
import "./Sidebar.scss";
import { BiCurrentLocation, BiX, BiSearchAlt } from "react-icons/bi";

const Sidebar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      {showSearchBar === false ? (
        <div className="Sidebar">
          <div className="sidebar__search-btn">
            <button onClick={() => setShowSearchBar(true)} className="btn">
              Search for places
            </button>
            <button className="btn btn-icon">
              <BiCurrentLocation />
            </button>
          </div>

          <div className="sidebar__img">
            <img src={""} alt="" />
          </div>

          <h1 className="heading-1">15 C</h1>
          <h2 className="heading-2">Shower</h2>

          <div className="sidebar__full-location">
            <div className="location-date">Today . Friday 5 Jun</div>
            <div className="location-city">Helsinky</div>
          </div>
        </div>
      ) : (
        <div className="Searchbar">
          <div onClick={() => setShowSearchBar(false)} className="btn btn-icon">
            <BiX />
          </div>

          <div className="searchbar__form">
            <form action="#">
              <div className="input-container">
                <BiSearchAlt />
                <input placeholder="search location" type="text" />
              </div>
              <button>Search</button>
            </form>
          </div>

          <div className="searchbar__btn-cities">
            <button>London</button>
            <button>Barcelona</button>
            <button>Long Beach</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
