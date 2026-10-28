import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto p-6 dark:text-white">
      <h1 className="text-3xl font-bold">404 页面不存在</h1>
      <Link to="/" className="underline">返回首页</Link>
    </div>
  )
}
