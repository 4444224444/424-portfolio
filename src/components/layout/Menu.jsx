// src/components/layout/Menu.jsx
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PROJECT', path: '/portfolio' },
  { label: 'CONTACTS', path: '/contacts' },
]

function Menu({ isOpen, onClose }) {
  const location = useLocation()


  if (!isOpen) return null

  return (
    <div className={styles.panelWrapper}>
      <div className={styles.panelBox}>
        <div className={styles.navBar}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.navLinkActive : ''
              }`}
              onClick={onClose}   
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>


      <div className={styles.panelBox}>
        <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.emailLabel}>ENTER YOUR<br></br>EMAIL ADDRESS</label>
          <input
            className={styles.emailInput}
            type="email"
          />
          <p className={styles.emailHelper}>Please check your email inbox</p>
        </form>
      </div>


      <div className={`${styles.panelBox} ${styles.pinkPanel}`}>
        <p className={styles.pinkPanelText}>
          WELCOME TO<br />
          MY WEB-SITE!
        </p>
      </div>
    </div>
  )
}

export default Menu
