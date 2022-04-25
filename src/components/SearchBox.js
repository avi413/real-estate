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
    rooms,
    rommsInput,
    setRommsInput,
    requestSort,
  } = props;
  const numOfRooms = [...new Set(data.map(item => item.num_rooms.toString()))];
  return (
    <div className="search">
      <Button onClick={() => requestSort("price")}>מיון לפי מחיר</Button>
      <Autocomplete
        sx={{ minWidth: 250 }}
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
      sx={{ minWidth: 120 }}
        value={rooms}
        id="rooms"
        freeSolo
        inputValue={rommsInput}
        onInputChange={(event, newInputValue) => {
            setRommsInput(newInputValue);
          }}
        options={numOfRooms}
        renderInput={(params) => <TextField {...params} label="מספר חדרים" />}
      />
    </div>
  );
}
