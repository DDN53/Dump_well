import React, { useEffect, useState } from "react";
import { getUserDataFromToken } from "../utils/userValidation";
import api from "../api/index";

function About() {
  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);
  console.log(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getEmployee();
        setUser(data);
        console.log("dsta:" + data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    // <div className="min-h-full" style={{ minHeight: "calc(100vh - 347px)" }}>
    //   About
    // </div>
    <div>About</div>
  );
}

export default About;
