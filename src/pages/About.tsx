export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">关于我</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          大连民族大学物联网工程大三学生，喜欢动手做软硬件相关的实验和项目。
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          虽然写代码偶尔会觉得头疼，但很享受把一个项目从0到1跑通的过程，最近一直在做大模型微调相关的实操练习。
        </p>
        <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">小目标</h2>
          <p className="text-gray-700 dark:text-gray-200">📌 夯实计算机基础，稳步提升代码能力</p>
          <p className="text-gray-700 dark:text-gray-200">📌 继续学习大模型、AI相关技术</p>
          <p className="text-gray-700 dark:text-gray-200">📌 积累项目经验</p>
        </div>
      </div>
    </div>
  )
}

