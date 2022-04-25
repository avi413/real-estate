import React, { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { TextField, Input } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXZpNDEzIiwiYSI6ImNsMmRmNnNpbDAxM3czYnB4Y2xuZjNoOW0ifQ.WiYM1t8aD2x7EMSWfhLEAw";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.0818);
  const [lat, setLat] = useState(31.4117);
  const [zoom, setZoom] = useState(6);
  const [type, Settype] = useState("");

  const handleLngChange = (e) => {
    setLng(e.currentTarget.value);
  };
  const handleLatChange = (e) => setLat(e.currentTarget.value);
  const handleZoomChange = (e) => setZoom(e.currentTarget.value);

  function handleClick(e) {
    Settype(e.target.type);
  }
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (type == "number") {
      map.current.getCenter().lng.toFixed(4);
      map.current.getCenter().lat.toFixed(4);
      map.current.setCenter([lng, lat]);
      map.current.setZoom([zoom]);
    }
  }, [lat, lng, zoom]);

  return (
    <div className="map" onClick={handleClick}>
      <div className="map__inputs">
        <TextField
          id="lng"
          label="lng"
          variant="outlined"
          value={lng}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleLngChange}
        />
        <TextField
          id="lat"
          label="lat"
          variant="outlined"
          value={lat}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleLatChange}
        />
        <TextField
          id="zoom"
          label="zoom"
          variant="outlined"
          value={zoom}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleZoomChange}
        />
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
