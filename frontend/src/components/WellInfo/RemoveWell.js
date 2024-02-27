import React, { useState, useEffect } from "react";
import api from "../../api/index";

const RemoveWell = ({ onClose, wellId, onRemove }) => {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      onClose();
    }
  }, [timer, onClose]);

  const [animateJump, setAnimateJump] = useState(false);

  const handleButtonClick = () => {
    setAnimateJump(true);
    setTimeout(() => {
      setAnimateJump(false);
    }, 500);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleRemove = async () => {
    try {
      // Replace the following line with the correct remove API call
      await api.removewell({ newWellNo: wellId });
      console.log("Removing well id:", wellId);

      // Notify the parent component (WellsTable) to remove the well from the table
      onRemove(wellId);

      // Close the modal
      onClose();
    } catch (error) {
      // Handle errors (display an error message or perform other actions)
      console.error("Error removing well:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-10"
      onClick={handleButtonClick}
    >
      <div
        onClick={handleModalClick}
        className={`p-8 bg-white rounded shadow-md ${
          animateJump ? "animate-jump" : ""
        }`}
      >
        <p className="mb-4 text-xl text-black">
          Are you sure you want to remove this well id: {wellId}?
        </p>

        <button
          onClick={handleRemove}
          disabled={timer > 12}
          className={`px-4 py-2 text-white rounded ${
            timer > 12
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          }`}
        >
          Remove {timer > 12 && <>({timer - 12})</>}
        </button>
        <button
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Cancel {timer < 13 && <>({timer})</>}
        </button>
      </div>
    </div>
  );
};

export default RemoveWell;
//done3
