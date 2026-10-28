import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold dark:text-white">我的个人网站</Link>
      <div className="flex gap-6 items-center text-lg">
        <Link to="/" className="text-gray-800 dark:text-gray-100">首页</Link>
        <Link to="/about" className="text-gray-800 dark:text-gray-100">关于我</Link>
        <Link to="/skill" className="text-gray-800 dark:text-gray-100">技能</Link>
        <Link to="/project" className="text-gray-800 dark:text-gray-100">项目</Link>
        <Link to="/blog" className="text-gray-800 dark:text-gray-100">博客</Link>
        <Link to="/contact" className="text-gray-800 dark:text-gray-100">联系我</Link>
        <button onClick={toggleTheme} className="text-xl text-gray-800 dark:text-white">
          {isDark ? '🌙 暗色' : '☀️ 亮色'}
        </button>
      </div>
    </nav>
  )
}


