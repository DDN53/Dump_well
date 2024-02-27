import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WellInfo from "./pages/WellInfo";
import Admin from "./pages/Admin.js";
import AdditionalInfo from "./pages/AdditionalInfo.js";
import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getUserDataFromToken } from "./utils/userValidation";
import MonthlyInfo from "./pages/MonthlyInfo";
import About from "./pages/About.js";
import ManageAcc from "./pages/ManageAcc.js";
import AddWell from "./pages/AddWell.js";
import store from "./store/store.js";
import NotFound from "./pages/NotFound.js";
import EditWell from "./pages/EditWell.js";
import ViewWell from "./pages/ViewWell.js";
import Pdf from "./pages/Pdf.js";

function App() {
  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);

  // useEffect(() => {
  //   // Dispatch action to set user role when the user logs in
  //   if (user && user.userRole) {
  //     store.dispatch({ type: "SET_USER_ROLE", payload: user.userRole });
  //   }
  // }, [user]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route
              element={
                user ? (
                  <Layout user={user} setUser={setUser} />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            >
              <Route path="/*" element={<Navigate to="/404" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/WellInfo" element={<WellInfo />} />
              <Route path="/MonthlyInfo" element={<MonthlyInfo />} />
              <Route path="/AdditionalInfo" element={<AdditionalInfo />} />
              <Route path="/about" element={<About />} />
              <Route path="/manageacc" element={<ManageAcc />} />
              <Route path="/addwell" element={<AddWell />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/editwell" element={<EditWell />} />
              <Route path="/viewwell" element={<ViewWell />} />
              <Route path="/pdf" element={<Pdf />} />
            </Route>
            <Route
              element={
                user ? (
                  <Navigate to="/Home" />
                ) : (
                  <Layout auth setUser={setUser} />
                )
              }
            >
              <Route path="/Login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
