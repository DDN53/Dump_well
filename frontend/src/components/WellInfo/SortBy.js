import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

export default function SortBy() {
  const [sort, setSort] = React.useState("CDD");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedWellSort = event.target.value;
    setSort(selectedWellSort);
    dispatch({ type: "SET_SELECTED_WELL_SORT", payload: selectedWellSort });
  };

  return (
    <FormControl sx={{ mr: 3, minWidth: 240 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Sory by"
        onChange={handleChange}
      >
        <MenuItem value="CDA">Created date A-Z</MenuItem>
        <MenuItem value="CDD">Created date Z-A</MenuItem>
        <MenuItem value="WIA">Well ID A-Z</MenuItem>
        <MenuItem value="WID">Well ID Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
