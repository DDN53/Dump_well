// RoleChangePopup.js
import React, { useState, useEffect } from "react";

const RoleChangePopup = ({
  open,
  handleClose,
  currentRole,
  handleRoleChange,
}) => {
  const [selectedRole, setSelectedRole] = useState(currentRole);

  useEffect(() => {
    setSelectedRole(currentRole);
  }, [currentRole]);

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSave = () => {
    handleRoleChange(selectedRole);
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold ">Change Role</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Select Role
          </label>
          <select
            value={selectedRole}
            onChange={handleRoleSelect}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="User">User</option>
            <option value="Viewer">Viewer</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleChangePopup;
