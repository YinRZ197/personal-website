export default function Skills() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">技能</h1>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-3 dark:text-white">💻 编程语言</h2>
        <p className="text-gray-600 dark:text-gray-300">C / C++、Java、Python、JavaScript</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-3 dark:text-white">🔧 框架 & 工具</h2>
        <p className="text-gray-600 dark:text-gray-300">React、Spring Boot、Git、VSCode、Anaconda</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-3 dark:text-white">🤖 硬件 & AI</h2>
        <p className="text-gray-600 dark:text-gray-300">51单片机、大模型SFT监督微调、LoRA低秩微调</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-3 dark:text-white">📚 专业基础</h2>
        <p className="text-gray-600 dark:text-gray-300">数据结构、计算机组成原理</p>
      </div>
    </div>
  )
}
