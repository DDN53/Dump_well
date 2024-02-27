import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

function SortBy() {
  const [sort, setSort] = React.useState("CDD");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedUserSort = event.target.value;
    setSort(selectedUserSort);
    dispatch({ type: "SET_SELECTED_USER_SORT", payload: selectedUserSort });
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
        <MenuItem value="UIA">User ID A-Z</MenuItem>
        <MenuItem value="UID">User ID Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortBy;
