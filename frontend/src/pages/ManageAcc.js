import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserDataFromToken } from "../utils/userValidation";

function ManageAcc() {
  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);

  const allowedRoles = ["LOCAL"];
  if (!allowedRoles.includes(user.mode)) {
    return <Navigate to="/404" />;
  }
  return (
    <div className="min-h-full" style={{ minHeight: "calc(100vh - 347px)" }}>
      ManageAcc
    </div>
  );
}

export default ManageAcc;
