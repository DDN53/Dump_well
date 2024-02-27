import { useNavigate } from "react-router-dom";
import { User } from "../../assets";
import { useSelector } from "react-redux";
import { getUserDataFromToken } from "../../utils/userValidation";
import { useState } from "react";

const UserCard = ({ name, onLogout }) => {
  const userData = getUserDataFromToken().result;
  const [userRole, setuserRole] = useState(userData.role);

  const navigate = useNavigate();

  const formattedUserRole = userRole === "Super" ? "Super Admin" : userRole;

  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          alt=""
          src={User}
          className="object-cover mt-6 mb-1 border-2 rounded-full border-primary1 w-28"
        ></img>
        <span>
          {name} - {formattedUserRole}
        </span>

        <div className="w-full mt-3 border-t-2 border-gray-400 ">
          <ul className="flex flex-col">
            {userData.mode === "LOCAL" && (
              <li className="w-full p-1 hover:bg-primary1 hover:text-white">
                <span
                  onClick={() => navigate("/manageacc")}
                  className="flex items-center justify-center cursor-pointer"
                >
                  Manage Account
                </span>
              </li>
            )}
            <li
              className="w-full p-1 cursor-pointer hover:bg-primary1 hover:text-white"
              onClick={onLogout}
            >
              <span className="flex items-center justify-center">Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
