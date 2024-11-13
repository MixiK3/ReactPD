import React, { useState } from "react";
import styles from "./Bonuses.module.css";
import YourBonuses from "./YourBonuses";
import HistoryBonuses from "./HistoryBonuses";

function Bonuses() {
  // State to manage which section is visible
  const [showBonuses, setShowBonuses] = useState(true);

  // Function to handle click on "Ваши бонусы" button
  const handleBonusesClick = () => {
    setShowBonuses(true);
  };

  // Function to handle click on "История" button
  const handleHistoryClick = () => {
    setShowBonuses(false);
  };

  return (
    <div className={styles.Bonuses}>
      <div>
        <div className={styles.articlesButtons}>
          <div>
            <h2 className="station-info">Страница бонусов</h2>
            <p className={styles.timeToBonus}>60 минут = 1 бонус</p>
          </div>
          <div className={styles.buttons}>
            <button
              className={showBonuses ? styles.active : styles.inactive}
              onClick={handleBonusesClick}
            >
              Ваши бонусы
            </button>
            <button
              className={!showBonuses ? styles.active : styles.inactive}
              onClick={handleHistoryClick}
            >
              История
            </button>
          </div>
        </div>

        {/* Conditional rendering for bonuses section */}
        {showBonuses ? (
          <div>
            <YourBonuses />
          </div>
        ) : (
          <div>
            <HistoryBonuses />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bonuses;
