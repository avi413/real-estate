import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function SearchBox(props) {
  const {
    data,
    value,
    inputValue,
    setInputValue,
    setRooms,
    requestSort,
  } = props;
  const numOfRooms = [...new Set(data.map(item => item.num_rooms.toString()))];
  return (
    <>
      <Button onClick={() => requestSort("price")}>מיון לפי מחיר</Button>
      <Autocomplete
        sx={{ width: "50%" }}
        value={value}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="searchbox"
        options={data.map((option) => option.address)}
        renderInput={(params) => <TextField {...params} label="כתובת" />}
      />
     <Autocomplete
      sx={{ width: "20%" }}
        id="rooms"
        freeSolo
        onInputChange={(event, newInputValue) => {
            setRooms(newInputValue);
          }}
        options={numOfRooms}
        renderInput={(params) => <TextField {...params} label="מספר חדרים" />}
      />
    </>
  );
}
