import { useSiteData } from '../hooks/useSiteData'

export default function Skills() {
  const { data } = useSiteData()
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">技能</h1>

      {data.skills.map((s) => (
        <div key={s.id} className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-3 dark:text-white">{s.icon} {s.category}</h2>
          <p className="text-gray-600 dark:text-gray-300">{s.items}</p>
        </div>
      ))}
    </div>
  )
}
