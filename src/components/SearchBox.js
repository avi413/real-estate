import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBox(props) {

  const { data, setValue, value, inputValue, setInputValue, setProperties } = props;
  const [items, setItems] = useState(data)
  return (
    <Stack spacing={2} sx={{ width: "90%" }}>
       <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setProperties(data.filter((item) => item.address == newInputValue));
        }}
        id="searchbox"
        options={data.map((option) => option.address)}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </Stack>
  );
}
