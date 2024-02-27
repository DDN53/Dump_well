import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Button from "@mui/material/Button";
import RoleChangePopup from "./RoleChangePopup";
import TableHead from "@mui/material/TableHead";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import api from "../../api/index";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isRolePopupOpen, setIsRolePopupOpen] = useState(false);
  const dispatch = useDispatch();
  const searchQueryAdmin = useSelector((state) => state.searchQueryAdmin);
  const SelectedSort = useSelector((state) => state.selectedUserSort);

  const [initialRows, setInitialRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.viewallusers();

      let sortedData;

      switch (SelectedSort) {
        case "CDA":
          sortedData = data?.data.sort((a, b) =>
            a.createdAt.localeCompare(b.createdAt)
          );
          break;
        case "CDD":
          sortedData = data?.data.sort((a, b) =>
            b.createdAt.localeCompare(a.createdAt)
          );
          break;
        case "UIA":
          sortedData = data?.data.sort((a, b) =>
            a.userName.localeCompare(b.userName)
          );
          break;
        case "UID":
          sortedData = data?.data.sort((a, b) =>
            b.userName.localeCompare(a.userName)
          );
          break;
        default:
          sortedData = data?.data.sort((a, b) =>
            b.createdAt.localeCompare(a.createdAt)
          );
          break;
      }

      setInitialRows(sortedData);
    };

    fetchData();
  }, [SelectedSort]);

  const SelectedRole = useSelector((state) => state.selectedUserRole);

  useEffect(() => {
    const filteredRows = initialRows
      .filter((row) => row.userName.toString().includes(searchQueryAdmin))
      .filter((row) => SelectedRole === "" || row.role === SelectedRole);
    setRows(filteredRows);
    setPage(0);
  }, [searchQueryAdmin, initialRows, SelectedRole]);

  useEffect(() => {
    dispatch({
      type: "SET_SEARCH_QUERY_ADMIN",
      payload: "",
    });
  }, []);

  const [rows, setRows] = useState(initialRows);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleEditUser = async (userId, newRole) => {
    try {
      const response = await api.edituser({
        userId: userId,
        newRole: newRole,
      });

      // Assuming your API response contains the updated user information
      const updatedUser = response.data;

      const updatedRows = rows.map((row) =>
        row.userId === updatedUser.userId ? updatedUser : row
      );

      // Update the state with the new user roles
      setRows(updatedRows);
      setInitialRows(updatedRows);

      setIsRolePopupOpen(false);
      console.log(`Changing role for ${updatedUser.userName} to ${newRole}`);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error editing user:", error);
    }
  };
  const handleRoleChangeClick = (row) => {
    setSelectedRow(row);
    setIsRolePopupOpen(true);
  };

  const handleRoleChange = (newRole) => {
    if (selectedRow) {
      handleEditUser(selectedRow.userId, newRole);
    }
  };

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_USER_SORT",
      payload: "",
    });

    dispatch({
      type: "SET_SELECTED_USER_ROLE",
      payload: "",
    });
  }, [dispatch]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No Users found.
                </TableCell>
              </TableRow>
            ) : (
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.userName}>
                  <TableCell component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell style={{ width: 160 }}>
                    {new Date(row.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell style={{ width: 160 }}>{row.role}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleRoleChangeClick(row)}
                      style={{
                        padding: "6px",
                        backgroundColor: "rgb(59 130 246 ", // Normal state color
                        borderRadius: "4px",
                        color: "#ffffff",
                        transition: "background-color 0.3s", // Smooth transition for the hover effect
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgb(29 78 216")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgb(59 130 246 ")
                      }
                    >
                      Change Role
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>

        <RoleChangePopup
          open={isRolePopupOpen}
          handleClose={() => setIsRolePopupOpen(false)}
          currentRole={selectedRow ? selectedRow.role : ""}
          handleRoleChange={handleRoleChange}
        />
      </TableContainer>
    </div>
  );
}

export default CustomPaginationActionsTable;
