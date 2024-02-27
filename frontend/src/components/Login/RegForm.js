import { useState } from "react";
import API from "../../api/index";

const initState = {
  name: "",
  employeeNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegForm = ({ onBackClick }) => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (!formData.name || !formData.employeeNumber || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    const register = new FormData();
    register.append("name", formData.name);
    register.append("email", formData.email);
    register.append("employeeNumber", formData.employeeNumber);
    register.append("password", formData.password);

    try {
      await console.log(register);
      await API.signup(register);
      onBackClick();
    } catch (error) {
      console.log(error);
    }
  };

  const PasswordMatch = formData.password === formData.confirmPassword;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-[350px] max-[350px]:w-[90vw]"></div>
        <div className="flex justify-start mt-8 mb-4 md:mt-0">
          <button
            className="py-1 text-xl rounded-full spx-2 text-primary2 focus:outline-none"
            onClick={onBackClick}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div className="mb-4 ">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Employee Number"
            name="employeeNumber"
            value={formData.employeeNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {!PasswordMatch && (
          <p className="text-ColorRed">Passwords don't match!</p>
        )}
        {formData.password.length > 0 && formData.password.length < 8 && (
          <p className="text-ColorRed">
            Password must be at least 8 characters long
          </p>
        )}
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div classpassword="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 mb-10 text-white rounded bg-primary2 hover:bg-primary1 focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
