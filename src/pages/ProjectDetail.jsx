import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  return (
    <section className={styles.projectDetailPage}>
      <div className={styles.detailInner}>
        <div className={styles.detailText}>
          <h1 className={styles.title}>Project Title</h1>
          <p className={styles.tools}>사용한 툴</p>
          <p className={styles.desc}>프로젝트 설명</p>
          <a className={styles.link} href="#" target="_blank">
            Visit Website →
          </a>
        </div>

        <div className={styles.detailImage}>
          <img src="/your-image.jpg" alt="project" />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;

