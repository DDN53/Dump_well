import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { useEffect, useState } from "react";
import api from "../api";
import { User } from "../assets";

const Layout = ({ auth, user, setUser }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {!auth && <NavBar user={user} active={active} setUser={setUser} />}
      <div className="flex-grow">
        <Outlet context={[setActive, setUser, user]} />
      </div>
      {!auth && <Footer />}
    </div>
  );
};

export default Layout;
