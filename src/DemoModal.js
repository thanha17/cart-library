import React, { useState } from "react";
import { Modal } from "./components/Modal";

export default function DemoModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={() => setOpen(true)}
      >
        Mở Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Demo Modal</h2>
        <p>
          Đây là nội dung của modal. Bạn có thể chỉnh sửa giao diện tại đây.
        </p>
      </Modal>
    </div>
  );
}
