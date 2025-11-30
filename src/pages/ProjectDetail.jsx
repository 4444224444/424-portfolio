// src/pages/ProjectDetail.jsx
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects.find((p) => p.id === id) ?? projects[0]
  const { title, overview, tools = [], link, images = [] } = project

  const [progress, setProgress] = useState(0)

  // body 스크롤 비활성화
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // 휠로만 가로 슬라이드 제어
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      const delta = e.deltaY || 0

      setProgress((prev) => {
        let next = prev + delta * 0.0015
        if (next < 0) next = 0
        if (next > 1) next = 1
        return next
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  const handleBackClick = () => {
    navigate(-1)
  }

  // 패널 배열 안전하게 생성
  const imageSlides = Array.isArray(images) ? images.slice(0, 5) : []

  // 첫 번째 이미지는 intro 화면의 메인 썸네일로만 사용
  const mainImage = imageSlides[0] ?? null

  const panels = [
    { type: 'intro' },
    // 두 번째 이미지부터 슬라이드로 사용
    ...imageSlides.slice(1).map((src, index) => ({
      type: 'image',
      src,
      index,
    })),
  ]

  const total = panels.length
  const translateX = progress * (total - 1) * 100

  return (
    <section className={styles.projectDetailPage}>
      <div className={styles.stickyContainer}>

        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={handleBackClick}>
            ← BACK
          </button>
        </div>

        <div
          className={styles.horizontalTrack}
          style={{ transform: `translateX(-${translateX}vw)` }}
        >
          {panels.map((panel, idx) => {
            if (panel.type === 'intro') {
              return (
                <div key={`intro-${idx}`} className={styles.slide}>
                  <div className={styles.contentRow}>

                    <div className={styles.detailText}>
                      <h1 className={styles.title}>{title}</h1>

                      <div className={styles.descBlock}>
                        <p className={styles.desc}>{overview}</p>

                        {tools.length > 0 && (
                          <div className={styles.toolsBlock}>
                            <span className={styles.toolsLabel}>TOOL</span>
                            <ul className={styles.toolsList}>
                              {tools.map((tool) => (
                                <li key={tool}>{tool}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {link && (
                        <a
                          className={styles.linkButton}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VISIT WEB
                        </a>
                      )}
                    </div>

                    <div className={styles.detailImageWrapper}>
                      <div className={styles.detailImageBox}>
                        {mainImage ? (
                          <img src={mainImage} alt={title} />
                        ) : (
                          <div className={styles.detailImageEmpty} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            // 이미지 슬라이드
            return (
              <div key={`img-${idx}`} className={styles.slide}>
                <div className={styles.fullImageWrapper}>
                    <div
                      className={`${styles.fullImageBox} ${
                        panel.ratio === 'portrait'
                          ? styles.portraitBox
                          : styles.landscapeBox
                      }`}
                    >
                      <img src={panel.src} alt="" />
                    </div>
                  </div>
              </div>
            )
          })}
        </div>

        <p className={styles.scrollHint}>Scroll to continue</p>
      </div>
    </section>
  )
}

export default ProjectDetail
