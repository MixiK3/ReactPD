import React from "react";
import "./Modal.css"; // You can style it here

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 style={{ fontSize: "24px", fontWeight: "regular" }}>
          Ура! Вы потратили бонусы!
        </h2>
        <button
          style={{ backgroundColor: "#775da6", marginTop: "20px" }}
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
