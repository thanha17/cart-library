// src/components/Input.js
import React from "react";

export const Input = (props) => {
  return (
    <input
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      {...props}
    />
  );
};
