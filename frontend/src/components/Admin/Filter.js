import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [Role, setRole] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedUserRole = event.target.value;
    setRole(selectedUserRole);
    dispatch({ type: "SET_SELECTED_USER_ROLE", payload: selectedUserRole });
  };

  return (
    <FormControl sx={{ minWidth: 240 }} size="small">
      <InputLabel id="demo-select-small-label">Filter Role</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Role}
        label="Sory by"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>ALL</em>
        </MenuItem>
        <MenuItem value="User">User</MenuItem>
        <MenuItem value="Viewer">Viewer</MenuItem>
        <MenuItem value="Editor">Editor</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
      </Select>
    </FormControl>
  );
}
