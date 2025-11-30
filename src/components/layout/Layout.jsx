// src/components/layout/Layout.jsx
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header.jsx'
import Menu from './Menu.jsx'

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="app-wrapper">
      <Header onMenuClick={toggleMenu} isOpen={isMenuOpen} />
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
