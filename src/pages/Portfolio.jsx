// src/pages/Portfolio.jsx
import { useState, useEffect, useRef } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/common/ProjectCard.jsx'
import styles from './Portfolio.module.css'

const FILTERS = [
  { label: 'ALL', value: 'all' },
  { label: 'HTML', value: 'html' },
  { label: 'REACT', value: 'react' },
  { label: 'THREE.JS', value: 'three' },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [offset, setOffset] = useState(0)

  const lastScrollYRef = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset
      const diff = currentY - lastScrollYRef.current
      lastScrollYRef.current = currentY

      // 스크롤 방향에 따라 위/아래로 살짝 밀기
      const direction = diff > 0 ? 1 : -1
      const bump = direction * 8 // 튕기는 거리(px)

      setOffset(bump)

      // 이미 예약된 리셋이 있으면 취소
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // 조금 있다가 다시 0으로 → 원래 sticky 자리로 착
      timeoutRef.current = setTimeout(() => {
        setOffset(0)
      }, 120)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className={styles.portfolioPage}>
      <div className={styles.inner}>
        <div className={styles.contentRow}>
          {/* 왼쪽: 타이틀 + 그리드 */}
          <div className={styles.mainColumn}>
            <h1 className={styles.title}>PROJECT</h1>

            <div className={styles.grid}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* 오른쪽: 필터 사이드바 */}
          <aside
            className={styles.filterSidebar}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <ul className={styles.filterList}>
              {FILTERS.map((filter) => (
                <li key={filter.value}>
                  <button
                    type="button"
                    className={`${styles.filterButton} ${
                      activeFilter === filter.value
                        ? styles.filterButtonActive
                        : ''
                    }`}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Portfolio


