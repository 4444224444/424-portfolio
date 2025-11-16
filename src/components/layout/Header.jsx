// src/components/layout/Header.jsx
import styles from './Header.module.css'

function Header({ onMenuClick, isOpen }) {
  return (
    <header className={styles.header}>
      <button
        className={`${styles.hamburgerBtn} ${isOpen ? styles.open : ''}`}
        type="button"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header


