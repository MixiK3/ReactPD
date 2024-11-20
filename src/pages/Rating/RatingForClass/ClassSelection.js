import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ClassSelection.module.css';

const ClassSelection = () => {
    const classes = Array.from({ length: 11 }, (v, i) => i + 1);

    return (
        <div>
            <h3 style={{ fontSize: '20px', padding: '10px 0' }}>Выберите класс для просмотра рейтинга</h3>
            <ul className={styles.list}>
                {classes.map((classId) => (
                    <li key={classId}>
                        <Link to={`/rating/class/${classId}`} className={styles.link}>Класс {classId}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassSelection;
