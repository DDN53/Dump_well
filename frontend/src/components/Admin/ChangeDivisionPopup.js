// ChangeDivisionPopup.js
import React, { useState, useEffect } from "react";

// Import the provinces list or fetch it from an API
import {
  provinces,
  allDistricts,
  getDistrictsByProvince,
} from "../../constants/Area.js";

const ChangeDivisionPopup = ({
  open,
  handleClose,
  currentDivision,
  handleDivisionChange,
}) => {
  const [newDivision, setNewDivision] = useState(currentDivision);

  useEffect(() => {
    setNewDivision(currentDivision);
  }, [currentDivision]);

  const handleSave = () => {
    handleDivisionChange(newDivision);
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold">Change Division</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            New Division
          </label>
          <select
            value={newDivision}
            onChange={(e) => setNewDivision(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
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

export default ChangeDivisionPopup;
//done
