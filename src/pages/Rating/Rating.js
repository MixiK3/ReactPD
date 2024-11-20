import React, { useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import RatingForSchool from './RatingForSchool/RatingForSchool';
import styles from "./Rating.module.css";

function Rating() {
  const [showRating, setShowRating] = useState(true);
  const navigate = useNavigate();

  const handleClickOnSchool = () => setShowRating(true);
  const handleClickOnClass = () => {
    setShowRating(false);
    navigate('/rating/classes'); // Переход на выбор классов
  };

  return (
    <div>
      <h2 className="station-info">Рейтинг</h2>
      <div className="container">
        <div className={styles.topTable}>
          <h2 className="table-h2">Рейтинг учеников по {showRating ? "школе" : "классам"}</h2>
          <div>
            <button className={showRating ? styles.active : styles.inactive} onClick={handleClickOnSchool}>
              По школе
            </button>
            <button className={!showRating ? styles.active : styles.inactive} onClick={handleClickOnClass}>
              По классам
            </button>
          </div>
        </div>

        {showRating ? (
          <RatingForSchool />
        ) : (
          <Outlet /> // Здесь будет отображаться содержимое выбранного маршрута
        )}
      </div>
    </div>
  );
}

export default Rating;
