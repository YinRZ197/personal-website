import { useSiteData } from '../hooks/useSiteData'

export default function Home() {
  const { data } = useSiteData()
  const { personal } = data
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">你好，我是{personal.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {personal.tagline}
      </p>
      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        {personal.highlights.map((line, i) => (
          <p key={i} className="text-gray-700 dark:text-gray-200">🔹 {line}</p>
        ))}
      </div>
    </div>
  )
}
