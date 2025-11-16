// src/pages/Home.jsx
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.homeRoot}>
      <div className={styles.textBlock}>
        <p className={`${styles.line} ${styles.main}`}>WELCOME TO</p>
        <p className={`${styles.line} ${styles.main}`}>MY 2025</p>
        <p className={`${styles.line} ${styles.main}`}>PORTFOLIO</p>
      </div>
    </section>
  )
}

export default Home


