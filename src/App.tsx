import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 管理后台：独立布局，不带前台 Navbar */}
        <Route path="/admin" element={<Admin />} />

        {/* 前台页面：统一套 Navbar */}
        <Route
          path="*"
          element={
            <div className="min-h-screen dark:bg-slate-900">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}
