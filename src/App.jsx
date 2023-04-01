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
  }, []);

  return (
    <div className="text-slate-50 md:flex">
      {info == null && <BeatLoader color="#36d7b7" />}
      {info != null && <Sidebar info={info} units={units} />}
      <Forecast />
    </div>
  );
}

export default App;
