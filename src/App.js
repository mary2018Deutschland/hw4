import React, { useState } from "react";
import "./App.css";

import citiesData from "./data/data";

import CitySelector from "./components/citySelector/index";
import CityCard from "./components/cityCard/index";

function App() {
  const [selectedCity, setSelectedCity] = useState(citiesData[0].name);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const selectedCityData = citiesData.find(
    (city) => city.name === selectedCity
  );

  return (
    <div className="container">
      <CitySelector
        selectedCity={selectedCity}
        handleCityChange={handleCityChange}
        cities={citiesData}
      />
      <CityCard city={selectedCityData} />
    </div>
  );
}

export default App;
