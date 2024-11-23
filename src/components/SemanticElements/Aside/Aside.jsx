import React from 'react'
import { Link } from 'react-router-dom' // Импорт Link из react-router-dom

import ic_dashboard from '../../../assets/svgs/forTemplate/ic_dashboard.svg'
import ic_account_box from '../../../assets/svgs/forTemplate/ic_account_box.svg'
import rating from '../../../assets/svgs/forTemplate/rating.svg'
import shield from '../../../assets/svgs/forTemplate/shield.svg'
import Bonuses from '../../../assets/svgs/forTemplate/Bonuses.svg'
import station from '../../../assets/svgs/forTemplate/station.svg'

import './Aside.css'

function Aside({ isNavOpen }) {
  return (
    <aside className={`aside ${isNavOpen ? 'open' : ''}`}>
      {isNavOpen && (
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/viewPage">
                {' '}
                {/* Ссылка на главную страницу */}
                <img src={ic_dashboard} alt="Обзор" className="nav-icon" />
                Обзор
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts">
                {' '}
                {/* Ссылка на страницу "О нас" */}
                <img src={ic_account_box} alt="Контакты" className="nav-icon" />
                Контакты
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rating">
                <img src={rating} alt="Рейтинг" className="nav-icon" />
                Рейтинг
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/statistics">
                {' '}
                {/* Ссылка на страницу "Контакты" */}
                <img src={shield} alt="Статистика" className="nav-icon" />
                Статистика
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bonuses">
                {' '}
                {/* Ссылка на страницу "Бонусы" */}
                <img src={Bonuses} alt="Бонусы" className="nav-icon" />
                Бонусы
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/station">
                {' '}
                {/* Ссылка на страницу "Станция" */}
                <img src={station} alt="Станция" className="nav-icon" />
                Станция
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  )
}

export default Aside
