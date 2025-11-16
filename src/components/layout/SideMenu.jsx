// src/components/layout/SideMenu.jsx
import { Link, useLocation } from 'react-router-dom'
import styles from './SideMenu.module.css'

const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'WORK', path: '/work' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'CONTACTS', path: '/contacts' },
]

function SideMenu({ isOpen, onClose }) {
  const location = useLocation()

  const handleOverlayClick = () => {
    onClose()
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
    >
      <nav className={styles.menu} onClick={stopPropagation}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={
                  location.pathname === item.path ? styles.active : undefined
                }
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu
