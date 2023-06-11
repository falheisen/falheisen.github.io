import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import React from "react";

function MapComponent() {
  // Define the list of countries to be highlighted
  const highlightedCountries = [
    "United States of America",
    "France",
    "Spain",
    "Portugal",
    "Italy",
    "Brazil",
    "Chile",
    "Germany",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Hungary",
    "Austria",
    "Czechia",
    "Monaco",
  ];

  return (
    <ComposableMap>
      <Geographies geography="https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson">
        {({ geographies }) =>
          geographies.map((geo) => {
            const { NAME } = geo.properties;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={highlightedCountries.includes(NAME) ? "red" : "#EAEAEC"}
                stroke="#D6D6DA"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default MapComponent;
