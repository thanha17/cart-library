// src/components/Modal.js
import React from "react";
import { createPortal } from "react-dom";

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-96">
        <button className="float-right" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.body
  );
};
