import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Main from "./Main";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function App() {
  const [properties, setProperties] = useState([]);
  const [value, setValue] = useState();
  const [rooms, setRooms] = useState();
  const [inputValue, setInputValue] = useState("");
  const [units, setUnits] = useState("");

  useEffect(() => {
    api
      .getProperties()
      .then((data) => {
        data.forEach((element) => {
          element.address = decodeURIComponent(
            JSON.parse('"' + element.address + '"')
          );
        });
        setProperties(data.filter((item) => item.address != "NaN"));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const hndleSortByPrice = () => {
    setProperties(properties.sort((a, b) => a.price - b.price));
  };

  return (
    <div className="App" dir="rtl">
      <Main
        onSortByPrice={hndleSortByPrice}
        properties={properties}
        setProperties={setProperties}
        value={value}
        rooms={rooms}
        inputValue={inputValue}
        units={units}
        setRooms={setRooms}
        setValue={setValue}
        setUnits={setUnits}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
