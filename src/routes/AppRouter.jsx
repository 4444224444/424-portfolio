import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Work from '../pages/Work.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'
import Contacts from '../pages/Contacts.jsx'

function AppRouter() {
  return (
    <Routes>
      {/* 공통 레이아웃 */}
      <Route path="/" element={<Layout />}>
        {/* 처음 접속 시 => Home */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* 상세 프로젝트 페이지는 나중에 사용할 예정 */}
        <Route path="portfolio/:projectId" element={<ProjectDetail />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
