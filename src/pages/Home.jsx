import styles from './Home.module.css'

function Home() {
  return (
    // 컨테이너
    <section className={styles.homeRoot}>
      
      {/* 텍스트 */}
      <div className={styles.textContainer}> 

        {/* 포트폴리오 */}
        <div className={styles.largeTitleBlock}>
          <p className={styles.largeLine}>PORT</p>
          <p className={styles.largeLine}>FOLIO</p>
        </div>

        {/* 꾸밈 선 */}
        <div className={styles.verticalDivider}></div>

        {/* dhf오른쪽 */}
        <div className={styles.smallTextBlock}>
          
          {/* 컨테이너하나추가 */}
          <div className={styles.nameAndYear}>
            <p className={styles.nameText}>Hyejin Jung</p>
            <p className={styles.yearText}>2025</p>
          </div>
          
          <p className={styles.roleText}>Web</p>
          <p className={styles.roleText}>Collection</p>
        </div>
        
      </div>
    </section>
  )
}

export default Home

