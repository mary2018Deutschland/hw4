import React from "react";

const CitySelector = ({ selectedCity, handleCityChange, cities }) => {
  return (
    <div>
      <h1>Выберите город:</h1>
      <select value={selectedCity} onChange={handleCityChange}>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
