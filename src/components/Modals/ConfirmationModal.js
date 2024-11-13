import React from "react";
import "./Modal.css"; // You can style it here

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 style={{ fontSize: "24px", fontWeight: "regular" }}>Вы уверены?</h2>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Да</button>
          <button onClick={onClose}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
