// src/pages/About.jsx
import { useState, useEffect } from 'react'
import styles from './About.module.css'

function About() {
  // 히어로애니메이션
  const [heroActive, setHeroActive] = useState(false)
    useEffect(() => {
      const timer = setTimeout(() => setHeroActive(true), 300)
      return () => clearTimeout(timer)
    }, [])


const sections = [
  { id: 'info',    title: 'INFO' },
  { id: 'contact', title: 'GET IN TOUCH' },
  { id: 'edu',     title: 'EDUCATION' },
  { id: 'awards',  title: 'AWARDS' },
  { id: 'work',    title: 'WORK' },
  { id: 'skill',   title: 'SKILL' },
]

  // 아코디언 메뉴
  const [openIds, setOpenIds] = useState([])

  const handleToggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    )
  }

  const renderSectionContent = (id) => {
    switch (id) {
      case 'info':
        return (
          <div className={styles.infoContent}>
            <div className={styles.infoLeft}>
              <div className={styles.infoMeta}>
                <p><span>Name</span> 정혜진</p>
                <p><span>Age</span> 2003.04.24</p>
                <p><span>Role</span> Front-end</p>
              </div>
              <p className={styles.infoBody}>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </p>
            </div>
            <div className={styles.infoRight}>
              <div className={styles.infoImagePlaceholder}/>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className={styles.twoColTable}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>TEL</span>
              <span className={styles.rowValue}>010-0000-0000</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>E-mail</span>
              <span className={styles.rowValue}>jhj030424@kaywon.ac.kr</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>INS</span>
              <span className={styles.rowValue}>@4444.22.4444</span>
            </div>
          </div>
        )

      case 'edu':
        return (
          <div className={styles.tableList}>
            <div className={styles.tableRow}>
              <span className={styles.year}>2026</span>
              <span className={styles.month}>02</span>
              <span className={styles.desc}>계원예술대학교 졸업</span>

              <span className={styles.year}>2023</span>
              <span className={styles.month}>03</span>
              <span className={styles.desc}>계원예술대학교 입학</span>

              <span className={styles.year}>2022</span>
              <span className={styles.month}>02</span>
              <span className={styles.desc}>대원여자고등학교 졸업</span>

              <span className={styles.year}>2019</span>
              <span className={styles.month}>03</span>
              <span className={styles.desc}>대원여자고등학교 입학</span>
            </div>
          </div>
        )

      case 'awards':
        return (
          <div className={styles.tableList}>
            <div className={styles.tableRow}>
              <span className={styles.year}>2025</span>
              <span className={styles.month}>11</span>
              <span className={styles.desc}>졸업작품 최우수작</span>

              <span className={styles.year}>2025</span>
              <span className={styles.month}>06</span>
              <span className={styles.desc}>1학기 웹프로그래밍 연합PT</span>
            </div>
          </div>
        )

      case 'work':
        return (
          <div className={styles.tableList}>
            <div className={styles.tableRow}>
              <span className={styles.year}>2025</span>
              <span className={styles.month}>ing</span>
              <span className={styles.desc}>쇼핑몰 MELTA</span>

              <span className={styles.year}>2023</span>
              <span className={styles.month}>09</span>
              <span className={styles.desc}>CU뉴광진구청점</span>

              <span className={styles.year}>2022</span>
              <span className={styles.month}>02</span>
              <span className={styles.desc}>하루돈까스 건대 후문점</span>
            </div>
          </div>
        )

      case 'skill':
        return (
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}/>
            <div className={styles.skillCard}/>
            <div className={styles.skillCard}/>
            <div className={styles.skillCard}/>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className={styles.aboutPage}>

      {/* 🔥 HERO */}
      <div className={`${styles.Hero} ${heroActive ? styles.HeroActive : ''}`}>
        
        <div className={styles.heroRow}>
          <span className={styles.heroPrefix}>i am</span>
          <p className={`${styles.HeroLine} ${styles.HeroLine1}`}>CRAFTING</p>
        </div>

        <p className={`${styles.HeroLine} ${styles.HeroLine2}`}>
          INTUITIVE DIGITAL
        </p>

        <p className={`${styles.HeroLine} ${styles.HeroLine3}`}>
          SYSTEMS FOR THE
        </p>

        <div className={styles.heroRow}>
          <p className={`${styles.HeroLine} ${styles.HeroLine4}`}>WEB</p>
          <span className={styles.heroSuffix}>
            <span>FRONT END</span>
            <span>BACK END</span>
            <span>DEVELOPER</span>
          </span>
        </div>

      </div>

      {/* 소개글 */}
      <div className={styles.aboutTextContainer}>
        <p className={styles.aboutText}>설명</p>
        <p className={styles.aboutText}>텍스트</p>
      </div>

      {/* 아코디언 */}
      <div className={styles.aboutSections}>
        {sections.map((section) => {
          const isOpen = openIds.includes(section.id)
          const isInfo = section.id === 'info'
          const isSkill = section.id === 'skill'

          return (
            <div
              key={section.id}
              className={`${styles.sectionItem} ${isInfo ? styles.sectionItemInfo : ''} ${isSkill ? styles.sectionItemSkill : ''}`}
            >
              <button
                type="button"
                className={styles.sectionHeader}
                onClick={() => handleToggle(section.id)}
              >
                <span className={styles.sectionTitle}>{section.title}</span>
                <span className={styles.sectionToggle}>{isOpen ? '×' : '+'}</span>
              </button>

              <div className={`${styles.sectionContent} ${isOpen ? styles.sectionContentOpen : ''}`}>
                {renderSectionContent(section.id)}
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default About