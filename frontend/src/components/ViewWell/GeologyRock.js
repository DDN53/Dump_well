import React from "react";

function GeologyRock(props) {
  return (
    <div>
      <p className="w-full min-h-[300px] p-2 border border-gray-500 rounded-md ">
        {props.formData.GeologyRock}
      </p>
    </div>
  );
}

export default GeologyRock;
