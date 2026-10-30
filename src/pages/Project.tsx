import { useSiteData } from '../hooks/useSiteData'

export default function Projects() {
  const { data } = useSiteData()
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">项目</h1>

      {data.projects.map((p, i) => (
        <div key={p.id} className={`border rounded-lg p-6 shadow-sm dark:bg-slate-800 ${i < data.projects.length - 1 ? 'mb-6' : ''}`}>
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">{p.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {p.desc}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">技术：{p.tech}</p>
        </div>
      ))}
    </div>
  )
}
