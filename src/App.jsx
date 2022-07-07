import { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
