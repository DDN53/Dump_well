import React from "react";

function GeologyOverburden(props) {
  return (
    <div>
      <textarea
        placeholder="GeologyOverburden"
        name="GeologyOverburden"
        value={props.formData.GeologyOverburden}
        onChange={props.handleChange}
        type="text"
        className="w-full h-[300px] p-2 border border-gray-500 rounded-md "
      />
    </div>
  );
}

export default GeologyOverburden;
