import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Forecast from "./components/Forecast";
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByLocation,
  get5DaysWeatherForecastByCity,
  get5DaysWeatherForecastByLocation,
} from "./service/api-service";
import { BeatLoader } from "react-spinners";

function App() {
  const [city, setCity] = useState("Rabat");
  const [units, setUnits] = useState("metric");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [info, setInfo] = useState(null);
  const [infoDays, setInfoDays] = useState(null);
  const [isLocation, setIsLocation] = useState(false);

  useEffect(() => {
    if (isLocation) {
      getCurrentWeatherByLocation(lat, lon, units).then((data) =>
        setInfo(data)
      );
      get5DaysWeatherForecastByLocation(lat, lon, units).then((data) =>
        setInfoDays(data)
      );
    } else {
      getCurrentWeatherByCity(city, units).then((data) => setInfo(data));
      get5DaysWeatherForecastByCity(city, units).then((data) =>
        setInfoDays(data)
      );
    }
    return () => {};
  }, [city, units, isLocation]);

  return (
    <div className="text-slate-50 md:flex">
      {!info && !infoDays ? (
        <div className="bg-slate-800 w-full min-h-screen flex justify-center items-center">
          <BeatLoader color="#10b981" />
        </div>
      ) : (
        <>
          <Sidebar
            info={info}
            units={units}
            setCity={setCity}
            setIsLocation={setIsLocation}
            setLat={setLat}
            setLon={setLon}
          />
          <Forecast
            units={units}
            setUnits={setUnits}
            info={info}
            infoDays={infoDays}
          />
        </>
      )}
    </div>
  );
}

export default App;
