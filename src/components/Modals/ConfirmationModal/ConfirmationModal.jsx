import React from "react";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.description}>Вы уверены?</h2>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm}>Да</button>
          <button onClick={onClose}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
