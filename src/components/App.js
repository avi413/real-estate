import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Main from "./Main";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api
      .getProperties()
      .then((data) => {
        setProperties(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <Main properties={properties}/>
    </div>
  );
}

export default App;
