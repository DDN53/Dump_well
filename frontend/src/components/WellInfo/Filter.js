import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import {
  provinces,
  allDistricts,
  getDistrictsByProvince,
} from "../../constants/Area";

export default function Filter() {
  const [district, setDistrict] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
    dispatch({ type: "SET_SELECTED_DISTRICT", payload: selectedDistrict });
  };

  return (
    <FormControl sx={{ minWidth: 240 }} size="small">
      <InputLabel id="demo-select-small-label">District</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={district}
        label="District"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>ALL</em>
        </MenuItem>
        {allDistricts.map((name, key) => (
          <MenuItem key={key} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
