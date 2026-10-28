export default function Projects() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">项目</h1>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">大模型监督微调与LoRA实操</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          基于自定义Transformer模型，完成SFT全参数微调、LoRA低秩微调，对比两种微调方式的显存开销与输出效果，熟悉聊天模板、loss遮盖机制。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">技术：Python、PyTorch、Transformers</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6 dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">51单片机基础控制系统</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          使用51单片机完成IO控制、定时器中断、串口通信等基础实验，实现LED、按键、简单外设驱动。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">技术：C语言、Keil、Proteus仿真</p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm dark:bg-slate-800">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">个人React网站（本站）</h2>
        <p className="text-gray-600 mb-3">
          Vite+React+Tailwind CSS搭建的个人作品集网站，多页面路由，后续计划增加暗色模式。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">技术：React、TypeScript、Tailwind CSS v4、React Router</p>
      </div>
    </div>
  )
}

  