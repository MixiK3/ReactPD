import React from 'react'
import Header from './Header/Header'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom' // Используется для вложенных маршрутов

const MainLayout = ({ toggleNav, isNavOpen }) => {
  return (
    <div className="App">
      <Header className="header" toggleNav={toggleNav} />
      <Aside className="aside" isNavOpen={isNavOpen} />
      <main className="main">
        <Outlet />
      </main>
      <Footer className="footer" />
    </div>
  )
}

export default MainLayout
