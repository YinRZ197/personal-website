import { useSiteData } from '../hooks/useSiteData'

export default function Contact() {
  const { data } = useSiteData()
  const { settings } = data
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">联系我</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {settings.welcome}
      </p>

      <div className="space-y-4 text-lg dark:text-gray-200">
        {settings.contactLines.map((c, i) => (
          <p key={i} className="dark:text-gray-200">{c.icon} {c.label}：{c.value}</p>
        ))}
      </div>

      <div className="mt-10 p-6 border rounded-lg shadow-sm dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">留言</h2>
        <p className="text-gray-500 dark:text-gray-400">留言表单后续再实现，先预留位置</p>
      </div>
    </div>
  )
}
