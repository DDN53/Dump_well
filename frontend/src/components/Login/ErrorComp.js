import React from "react";

function Error({ error }) {
  return error && <div className="text-red-600">{error}</div>;
}

export default Error;
