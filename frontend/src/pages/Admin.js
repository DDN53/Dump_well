// Admin.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import CustomPaginationActionsTable from "../components/Admin/CustomPaginationActionsTable ";
import Search from "../components/Admin/Search";
import { getUserDataFromToken } from "../utils/userValidation";
import Filter from "../components/Admin/Filter";
import SortBy from "../components/Admin/SortBy";

function Admin() {
  // const userRole = useSelector((state) => state.userRole);

  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);

  const allowedRoles = ["Super"];
  if (!allowedRoles.includes(user.userRole)) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-full" style={{ minHeight: "calc(100vh - 347px)" }}>
      <div className="flex flex-row justify-between">
        <div className="mt-4 ml-6">
          <SortBy />
        </div>
        <div className="flex-col justify-end py-3 pl-3 mr-3 border border-gray-300 rounded-lg">
          <div className="mb-2 text-sm font-medium text-gray-600">
            Filter by:
          </div>
          <Filter />
          <div className="mt-3">
            <Search />
          </div>
        </div>
      </div>
      <CustomPaginationActionsTable />
    </div>
  );
}

export default Admin;
