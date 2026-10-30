// ============================================================
// 全站数据源（默认数据）
// 前台各页面从此文件读取；管理后台修改后写入 localStorage，
// 前台优先读 localStorage，没有则用这里的默认数据。
// 修改默认数据需同步调整后台表单类型。
// ============================================================

export interface PersonalInfo {
  name: string          // 姓名
  title: string         // 职位 / 头衔
  tagline: string       // 一句话介绍
  avatar: string        // 头像（URL 或空）
  email: string
  location: string      // 所在地区
  resumePath: string    // 简历文件路径
  // About 页
  introLines: string[]  // 个人简介（多段）
  goals: string[]       // 小目标
  // Home 页高亮
  highlights: string[]  // 🔹 擅长 / 正在学习 / 兴趣
}

export interface SkillGroup {
  id: string
  icon: string
  category: string
  items: string
}

export interface ProjectItem {
  id: string
  title: string
  desc: string
  tech: string
}

export interface BlogItem {
  id: string
  title: string
  desc: string
  date: string
}

export interface SiteSettings {
  siteName: string      // 网站名（导航栏标题）
  welcome: string       // 联系页欢迎语
  contactLines: { icon: string; label: string; value: string }[] // 联系方式
  workExperience: { title: string; company: string; period: string; desc: string }[]
}

export interface SiteData {
  personal: PersonalInfo
  skills: SkillGroup[]
  projects: ProjectItem[]
  blogs: BlogItem[]
  settings: SiteSettings
}

export const STORAGE_KEY = 'site-data-v1'

// ---------- 默认数据（与当前网站内容一致） ----------
export const defaultSiteData: SiteData = {
  personal: {
    name: '尹如珍',
    title: '物联网工程专业学生',
    tagline: '物联网工程专业大三学生，喜欢编程、探索AI大模型。',
    avatar: '',
    email: '389411361@qq.com',
    location: '大连',
    resumePath: '',
    introLines: [
      '大连民族大学物联网工程大三学生，喜欢动手做软硬件相关的实验和项目。',
      '虽然写代码偶尔会觉得头疼，但很享受把一个项目从0到1跑通的过程，最近一直在做大模型微调相关的实操练习。',
    ],
    goals: ['夯实计算机基础，稳步提升代码能力', '继续学习大模型、AI相关技术', '积累项目经验'],
    highlights: ['擅长：数据结构、计算机组成原理', '正在学习：单片机、大模型LoRA微调、SpringBoot', '兴趣：机器人竞赛'],
  },
  skills: [
    { id: 'lang', icon: '💻', category: '编程语言', items: 'C / C++、Java、Python、JavaScript' },
    { id: 'frame', icon: '🔧', category: '框架 & 工具', items: 'React、Spring Boot、Git、VSCode、Anaconda' },
    { id: 'ai', icon: '🤖', category: '硬件 & AI', items: '51单片机、大模型SFT监督微调、LoRA低秩微调' },
    { id: 'base', icon: '📚', category: '专业基础', items: '数据结构、计算机组成原理' },
  ],
  projects: [
    {
      id: 'p1',
      title: '大模型监督微调与LoRA实操',
      desc: '基于自定义Transformer模型，完成SFT全参数微调、LoRA低秩微调，对比两种微调方式的显存开销与输出效果，熟悉聊天模板、loss遮盖机制。',
      tech: 'Python、PyTorch、Transformers',
    },
    {
      id: 'p2',
      title: '51单片机基础控制系统',
      desc: '使用51单片机完成IO控制、定时器中断、串口通信等基础实验，实现LED、按键、简单外设驱动。',
      tech: 'C语言、Keil、Proteus仿真',
    },
    {
      id: 'p3',
      title: '个人React网站（本站）',
      desc: 'Vite+React+Tailwind CSS搭建的个人作品集网站，多页面路由，后续计划增加暗色模式。',
      tech: 'React、TypeScript、Tailwind CSS v4、React Router',
    },
  ],
  blogs: [
    {
      id: 'b1',
      title: '大模型LoRA微调踩坑记录',
      desc: '记录SFT监督微调、聊天模板、loss掩码、权重加载、分词器匹配过程里遇到的各种报错和解决办法。',
      date: '2026-10-28',
    },
    {
      id: 'b2',
      title: '51单片机中断学习笔记',
      desc: '定时器中断、外部中断原理，代码示例，仿真调试时容易忽略的细节整理。',
      date: '2026-10-20',
    },
    {
      id: 'b3',
      title: 'Vite+React+Tailwind v4 搭建网站踩坑',
      desc: '记录css引入方式、postcss配置这些容易卡住的地方。',
      date: '2026-10-28',
    },
  ],
  settings: {
    siteName: '我的个人网站',
    welcome: '欢迎交流项目、技术学习相关内容！',
    contactLines: [
      { icon: '📧', label: '邮箱', value: '389411361@qq.com' },
      { icon: '💻', label: 'GitHub', value: 'github.com/YinRZ97' },
      { icon: '🏫', label: '学校', value: '大连民族大学' },
    ],
    workExperience: [
      {
        title: '大模型微调实操练习',
        company: '实训项目',
        period: '近期',
        desc: '基于自定义Transformer完成SFT全参数微调与LoRA低秩微调，熟悉聊天模板、loss遮盖与权重加载。',
      },
    ],
  },
}
