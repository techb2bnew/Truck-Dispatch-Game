"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const ET_COLOR = "#02A2B9";
const CT_COLOR = "#FE7675";
const MT_COLOR = "#F0C052";
const PT_COLOR = "#02AEAB";
const AK_COLOR = "#8b5cf6";
const HI_COLOR = "#ec4899";

const timezoneColors = {
  Maine: ET_COLOR,
  "New Hampshire": ET_COLOR,
  Vermont: ET_COLOR,
  Massachusetts: ET_COLOR,
  "Rhode Island": ET_COLOR,
  Connecticut: ET_COLOR,
  "New York": ET_COLOR,
  "New Jersey": ET_COLOR,
  Pennsylvania: ET_COLOR,
  Delaware: ET_COLOR,
  Maryland: ET_COLOR,
  "District of Columbia": ET_COLOR,
  Virginia: ET_COLOR,
  "West Virginia": ET_COLOR,
  Ohio: ET_COLOR,
  Michigan: ET_COLOR,
  Indiana: ET_COLOR,
  Kentucky: ET_COLOR,
  "North Carolina": ET_COLOR,
  "South Carolina": ET_COLOR,
  Georgia: ET_COLOR,
  Florida: ET_COLOR,

  Wisconsin: CT_COLOR,
  Illinois: CT_COLOR,
  Minnesota: CT_COLOR,
  Iowa: CT_COLOR,
  Missouri: CT_COLOR,
  Arkansas: CT_COLOR,
  Louisiana: CT_COLOR,
  "North Dakota": CT_COLOR,
  "South Dakota": CT_COLOR,
  Nebraska: CT_COLOR,
  Kansas: CT_COLOR,
  Oklahoma: CT_COLOR,
  Texas: CT_COLOR,
  Alabama: CT_COLOR,
  Mississippi: CT_COLOR,
  Tennessee: CT_COLOR,

  Montana: MT_COLOR,
  Idaho: MT_COLOR,
  Wyoming: MT_COLOR,
  Utah: MT_COLOR,
  Colorado: MT_COLOR,
  Arizona: MT_COLOR,
  "New Mexico": MT_COLOR,

  Washington: PT_COLOR,
  Oregon: PT_COLOR,
  California: PT_COLOR,
  Nevada: PT_COLOR,

  Alaska: AK_COLOR,

  Hawaii: HI_COLOR
};

const stateCentroids = {
  Alabama: [-86.75, 32.75],
  Alaska: [-149.5, 64.0],
  Arizona: [-111.75, 34.25],
  Arkansas: [-92.25, 34.75],
  California: [-119.5, 37.5],
  Colorado: [-105.5, 39.0],
  Connecticut: [-72.75, 41.75],
  Delaware: [-75.5, 39.0],
  "District of Columbia": [-77.0, 38.9],
  Florida: [-81.75, 28.0],
  Georgia: [-83.5, 32.5],
  Hawaii: [-157.5, 20.5],
  Idaho: [-114.5, 44.5],
  Illinois: [-89.5, 40.0],
  Indiana: [-86.25, 40.0],
  Iowa: [-93.5, 42.0],
  Kansas: [-98.0, 38.5],
  Kentucky: [-84.75, 37.5],
  Louisiana: [-92.5, 31.0],
  Maine: [-69.0, 45.5],
  Maryland: [-76.75, 39.0],
  Massachusetts: [-71.75, 42.25],
  Michigan: [-85.0, 44.0],
  Minnesota: [-94.25, 46.5],
  Mississippi: [-89.75, 33.0],
  Missouri: [-92.5, 38.5],
  Montana: [-110.0, 47.0],
  Nebraska: [-99.5, 41.5],
  Nevada: [-117.0, 39.5],
  "New Hampshire": [-71.5, 43.5],
  "New Jersey": [-74.5, 40.0],
  "New Mexico": [-106.0, 34.5],
  "New York": [-75.0, 43.0],
  "North Carolina": [-79.5, 35.5],
  "North Dakota": [-100.5, 47.5],
  Ohio: [-82.5, 40.5],
  Oklahoma: [-97.5, 35.5],
  Oregon: [-120.5, 44.0],
  Pennsylvania: [-77.5, 41.0],
  "Rhode Island": [-71.5, 41.5],
  "South Carolina": [-80.5, 33.5],
  "South Dakota": [-100.5, 44.5],
  Tennessee: [-86.5, 35.8],
  Texas: [-99.5, 31.5],
  Utah: [-111.5, 39.5],
  Vermont: [-72.5, 44.0],
  Virginia: [-79.0, 37.5],
  Washington: [-120.5, 47.5],
  "West Virginia": [-80.5, 38.5],
  Wisconsin: [-89.5, 44.5],
  Wyoming: [-107.5, 43.0]
};

const ChooseStateMap = () => {
  const [selectedStates, setSelectedStates] = useState([]);

  const toggleState = stateName => {
    setSelectedStates(prev => {
      if (prev.includes(stateName)) {
        return prev.filter(s => s !== stateName);
      } else {
        return [...prev, stateName];
      }
    });
  };

  const getStateColor = stateName => {
    // If selected, always show green
    if (selectedStates.includes(stateName)) {
      return "#16a34a";
    }
    // Otherwise show timezone color
    return timezoneColors[stateName] || "#4b5563";
  };

  return (
    <div className="p-4 rounded-xl text-center">
      <div className="relative w-full  rounded-lg overflow-hidden">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{
            scale: 800
          }}
          width={800}
          height={400}
          viewBox="0 0 800 400"
          className="scale-[1.2]"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter(
                  geo =>
                    geo.properties.name !== "Alaska" &&
                    geo.properties.name !== "Hawaii"
                )
                .map(geo => {
                  const stateName = geo.properties.name;
                  const centroid = stateCentroids[stateName];

                  return (
                    <g key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        onClick={() => toggleState(stateName)}
                        style={{
                          default: {
                            fill: getStateColor(stateName),
                            outline: "none",
                            cursor: "pointer",
                            stroke: "#ffffff",
                            strokeWidth: 0.5,
                            transition: "fill 0.2s ease"
                          },
                          hover: {
                            fill: selectedStates.includes(stateName)
                              ? "#279600"
                              : "#279600",
                            outline: "none",
                            cursor: "pointer",
                            stroke: "#ffffff",
                            strokeWidth: 0.5
                          },
                          pressed: {
                            fill: "#15803d",
                            outline: "none"
                          }
                        }}
                      />

                      {/* State Abbreviation - Smaller text to prevent cutting */}
                      {centroid &&
                        <Marker coordinates={centroid}>
                          <text
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            style={{
                              fontSize: selectedStates.includes(stateName)
                                ? "8px"
                                : "7px",
                              fill: "white",
                              pointerEvents: "none",
                              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                              fontFamily: "Arial, sans-serif",
                              letterSpacing: "0.5px",
                              zIndex: "10",
                              position: "relative"
                            }}
                          >
                            {stateName}
                          </text>
                        </Marker>}
                    </g>
                  );
                })}
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default ChooseStateMap;
