import React from "react";

function GeologyRock(props) {
  return (
    <div>
      <textarea
        placeholder="GeologyRock"
        name="GeologyRock"
        value={props.formData.GeologyRock}
        onChange={props.handleChange}
        type="text"
        className="w-full h-[300px] p-2 border border-gray-500 rounded-md "
      />
    </div>
  );
}

export default GeologyRock;
