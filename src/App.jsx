import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Forecast from "./components/Forecast";
import { getCurrentWeather } from "./service/api-service";
import { BeatLoader } from "react-spinners";

function App() {
  const [city, setCity] = useState("Rabat");
  const [units, setUnits] = useState("metric");
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getCurrentWeather(city, units).then((data) => setInfo(data));
    return () => {};
  }, [city]);

  return (
    <div className="text-slate-50 md:flex">
      {info == null ? (
        <div className="bg-slate-800 w-full min-h-screen flex justify-center items-center">
          <BeatLoader color="#10b981" />
        </div>
      ) : (
        <>
          <Sidebar info={info} units={units} setCity={setCity} />
          <Forecast />
        </>
      )}
    </div>
  );
}

export default App;
