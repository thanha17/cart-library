// src/components/Modal.js
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ open, onClose, children }) => {
  // Đóng khi nhấn phím ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // click ngoài modal để đóng
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // chặn click bên trong
      >
        {/* Nút đóng */}
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Nội dung modal */}
        <div className="mt-2">{children}</div>
      </div>
    </div>,
    document.body
  );
};
