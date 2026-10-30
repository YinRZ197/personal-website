import { useSiteData } from '../hooks/useSiteData'

export default function Blog() {
  const { data } = useSiteData()
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">博客</h1>

      {data.blogs.map((b, i) => (
        <div key={b.id} className={`border rounded-lg p-6 shadow-sm dark:bg-slate-800 hover:shadow-md transition ${i < data.blogs.length - 1 ? 'mb-6' : ''}`}>
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">{b.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {b.desc}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">发布时间：{b.date}</p>
        </div>
      ))}
    </div>
  )
}
