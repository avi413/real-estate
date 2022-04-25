import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Main from "./Main";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function App() {
  const [properties, setProperties] = useState([]);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');


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

  return (
    <div className="App" dir="rtl">
      <Main properties={properties} setProperties={setProperties} value={value} inputValue={inputValue} setValue={setValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;