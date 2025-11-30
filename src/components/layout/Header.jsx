// src/components/layout/Header.jsx
import styles from './Header.module.css'

function Header({ onMenuClick, isOpen }) {
  return (
    <header className={styles.header}>
      <button
        className={`${styles.menuBtn} ${isOpen ? styles.open : ''}`}
        type="button"
        onClick={onMenuClick}
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>
    </header>
  )
}

export default Header


