import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Forecast from "./components/Forecast";
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByLocation,
} from "./service/api-service";
import { BeatLoader } from "react-spinners";

function App() {
  const [city, setCity] = useState("Rabat");
  const [units, setUnits] = useState("metric");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [info, setInfo] = useState(null);
  const [infoDays, setInfoDays] = useState(null);
  // Flag to know witch method to use - getCurrentWeatherByCity or getCurrentWeatherByLocation
  const [isLocation, setIsLocation] = useState(false);

  useEffect(() => {
    if (isLocation) {
      getCurrentWeatherByLocation(lat, lon, units).then((data) =>
        setInfo(data)
      );
    } else {
      getCurrentWeatherByCity(city, units).then((data) => setInfo(data));
      return () => {};
    }
  }, [city, units, isLocation]);

  return (
    <div className="text-slate-50 md:flex">
      {info == null ? (
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
          <Forecast />
        </>
      )}
    </div>
  );
}

export default App;
