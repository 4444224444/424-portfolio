import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'
import Contacts from '../pages/Contacts.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
<Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
