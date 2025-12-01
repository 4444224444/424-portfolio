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
        <p className={styles.aboutText}>안녕하세요, 창의적인 프론트엔드 개발자 정혜진입니다!
        새로운 방식으로 화면을 풀어내고, 기존에 없던 흐름을 만들어보는 일을 좋아합니다.
        작은 디테일 하나라도 더 나은 방향이 있다면 과감히 바꿔보고, 새로운 시도를 통해 더 자연스러운 사용자 경험을 찾고 싶습니다.
        정해진 틀에 머무르기보다, 아이디어를 실험하고 확장해 서비스에 새로운 감각을 더하는 것을 강점으로 삼고 있는 저는.
        앞으로도 계속 도전하며 한 단계 더 완성도 높은 웹을 만드는 개발자가 되고자 합니다.</p>
        <p className={styles.aboutText}>아래로 스크롤하고, 클릭하며 저에 대한 정보를 확인해 주세요!</p>
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