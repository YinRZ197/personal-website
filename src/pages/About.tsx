import { useSiteData } from '../hooks/useSiteData'

export default function About() {
  const { data } = useSiteData()
  const { personal } = data
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">关于我</h1>
        {personal.introLines.map((line, i) => (
          <p key={i} className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {line}
          </p>
        ))}
        <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">小目标</h2>
          {personal.goals.map((goal, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-200">📌 {goal}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
