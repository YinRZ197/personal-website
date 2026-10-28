export default function Blog() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">博客</h1>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800 hover:shadow-md transition">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">大模型LoRA微调踩坑记录</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          记录SFT监督微调、聊天模板、loss掩码、权重加载、分词器匹配过程里遇到的各种报错和解决办法。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">发布时间：2026-10-28</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800 hover:shadow-md transition">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">51单片机中断学习笔记</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          定时器中断、外部中断原理，代码示例，仿真调试时容易忽略的细节整理。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">发布时间：2026-10-20</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm dark:bg-slate-800 hover:shadow-md transition">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">Vite+React+Tailwind v4 搭建网站踩坑</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          记录css引入方式、postcss配置这些容易卡住的地方。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">发布时间：2026-10-28</p>
      </div>
    </div>
  )
}
