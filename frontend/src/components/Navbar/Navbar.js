import { useNavigate } from "react-router-dom";
import { User, logo } from "../../assets";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { getUserDataFromToken } from "../../utils/userValidation";

const Navbar = ({ user, active, setUser }) => {
  const { userName, userRole } = user;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
    setUser(null);
  };

  const userData = getUserDataFromToken().result;
  const [user1, setUser1] = useState(userData);

  return (
    <div>
      <div className="relative z-20 animate-fade-down animate-once">
        <div className="h-[60px] max-md:h-0 mb-4"></div>
        <div className="md:fixed md:top-0 w-full max-md:h-[80px] h-[60px] md:px-[40px] bg-primary3 max-md:justify-center items-center flex md:justify-between">
          {/* Logo */}
          <img alt="" src={logo} className="w-[250px]"></img>

          {/* Menu */}
          <div>
            <ul className="flex mx-3 space-x-6 max-[1000px]:space-x-1 max-md:hidden">
              <li
                className="p-2 border-2 border-transparent cursor-pointer hover:border-primary2 hover:shadow-md"
                onClick={() => navigate("/home")}
              >
                Home
              </li>
              <li className="relative group">
                <div className="flex items-center p-2 border-2 border-transparent cursor-pointer hover:border-primary2 hover:shadow-md">
                  Wells<ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                {/* Drop-down menu for Billing */}
                <ul className="absolute left-0 hidden space-y-1 border bg-primary3 border-primary2 w-44 top-full group-hover:block animate-flip-down animate-once">
                  <li
                    className="p-2 pl-3 cursor-pointer hover:bg-primary1 hover:text-white"
                    onClick={() => navigate("/wellinfo")}
                  >
                    Wells Information
                  </li>
                  <li
                    onClick={() => navigate("/monthlyinfo")}
                    className="p-2 pl-3 cursor-pointer hover:bg-primary1 hover:text-white"
                  >
                    Monthly Information
                  </li>
                  <li
                    onClick={() => navigate("/additionalinfo")}
                    className="p-2 pl-3 cursor-pointer hover:bg-primary1 hover:text-white"
                  >
                    Additional Information
                  </li>
                </ul>
              </li>

              {user1.userRole === "Super" && (
                <li
                  className="p-2 border-2 border-transparent cursor-pointer hover:border-primary2 hover:shadow-md"
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </li>
              )}
              <li
                onClick={() => navigate("/about")}
                className="p-2 border-2 border-transparent cursor-pointer hover:border-primary2 hover:shadow-md"
              >
                About
              </li>
            </ul>
          </div>

          {/* Username */}
          <div className="relative group">
            <div className="flex items-center p-[6px] pr-2 cursor-pointer max-md:hidden">
              <div className="flex items-center">
                <img
                  alt=""
                  src={User}
                  className="w-[30px] mr-1 object-cover border-[1px] border-primary1 rounded-full"
                ></img>
              </div>
              <div className="flex items-center">{userName}</div>
            </div>
            {/* Dropdown user */}
            <div className="absolute animate-fade-down animate-once right-[-40px] hidden w-48 space-y-1 border bg-primary3 border-primary2 top-full group-hover:block ">
              <UserCard name={userName} onLogout={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
