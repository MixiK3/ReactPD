import React from "react";
import styles from './SuccessModal.module.css' // You can style it here

const SuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.description}>
          Ура! Вы потратили бонусы!
        </h2>
        <button
          className={styles.modalButtons}
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
