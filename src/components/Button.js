// src/components/Button.js
import React from "react";

export const Button = ({ variant = "primary", ...props }) => {
  const className =
    variant === "primary"
      ? "bg-blue-500 text-white px-4 py-2 rounded"
      : "bg-gray-200 text-black px-4 py-2 rounded";

  return <button className={className} {...props} />;
};
