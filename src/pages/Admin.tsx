import { useState } from 'react'
import { useSiteData } from '../hooks/useSiteData'
import type { SiteData } from '../data/siteData'

type TabKey = 'profile' | 'skills' | 'projects' | 'blogs' | 'settings'

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'profile', label: '个人信息', icon: '👤' },
  { key: 'skills', label: '技能管理', icon: '🛠️' },
  { key: 'projects', label: '项目管理', icon: '📁' },
  { key: 'blogs', label: '博客管理', icon: '📝' },
  { key: 'settings', label: '站点设置', icon: '⚙️' },
]

// 通用输入框
function Field({ label, required, value, onChange, placeholder }: {
  label: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="text-sm text-slate-300 mb-1 block">
        {label}
        {required && <span className="text-red-400"> *</span>}
      </span>
      <input
        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

function TextArea({ label, required, value, onChange, rows }: {
  label: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  return (
    <label className="block">
      <span className="text-sm text-slate-300 mb-1 block">
        {label}
        {required && <span className="text-red-400"> *</span>}
      </span>
      <textarea
        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 resize-y"
        rows={rows ?? 3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

export default function Admin() {
  const { data, saveData, resetData } = useSiteData()
  const [tab, setTab] = useState<TabKey>('profile')
  // 本地草稿，保存时才写入 localStorage
  const [draft, setDraft] = useState<SiteData>(data)

  const setPersonal = (patch: Partial<SiteData['personal']>) =>
    setDraft((d) => ({ ...d, personal: { ...d.personal, ...patch } }))

  const setSettings = (patch: Partial<SiteData['settings']>) =>
    setDraft((d) => ({ ...d, settings: { ...d.settings, ...patch } }))

  const handleAvatar = (file?: File) => {
    if (!file) {
      setPersonal({ avatar: '' })
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPersonal({ avatar: String(reader.result || '') })
    reader.readAsDataURL(file)
  }

  const save = () => {
    saveData(draft)
    alert('已保存，前台页面刷新后生效')
  }

  const reset = () => {
    if (confirm('确定恢复为默认数据吗？自定义修改将丢失。')) {
      resetData()
      setDraft(data)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* ===== 左侧导航 ===== */}
      <aside className="w-56 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="px-4 py-5 border-b border-slate-800">
          <div className="text-xl font-bold text-white">管理后台</div>
          <div className="text-xs text-slate-500 mt-1">{data.settings.siteName}</div>
        </div>
        <nav className="flex-1 py-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`w-full text-left px-4 py-3 flex items-center gap-2 text-sm transition ${
                tab === t.key
                  ? 'bg-slate-800 text-white border-l-2 border-blue-500'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          ⚠️ 数据保存在本浏览器，仅本机前台可见
        </div>
      </aside>

      {/* ===== 右侧内容区 ===== */}
      <main className="flex-1 p-8 overflow-auto">
        {tab === 'profile' && (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">个人信息</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Field label="姓名" required value={draft.personal.name} onChange={(v) => setPersonal({ name: v })} />
              <Field label="职位 / 头衔" value={draft.personal.title} onChange={(v) => setPersonal({ title: v })} />
            </div>
            <div className="mb-4">
              <Field label="一句话介绍" value={draft.personal.tagline} onChange={(v) => setPersonal({ tagline: v })} />
            </div>

            {/* 头像 */}
            <div className="mb-4">
              <span className="text-sm text-slate-300 mb-1 block">头像</span>
              <div className="flex items-center gap-3">
                {draft.personal.avatar ? (
                  <img
                    src={draft.personal.avatar}
                    alt="avatar"
                    className="w-16 h-16 rounded-full object-cover border border-slate-600"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-slate-500">无</div>
                )}
                <label className="bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm px-3 py-2 rounded cursor-pointer">
                  上传头像
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAvatar(e.target.files?.[0])} />
                </label>
                {draft.personal.avatar && (
                  <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm px-3 py-2 rounded" onClick={() => handleAvatar()}>
                    移除
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Field label="邮箱" required value={draft.personal.email} onChange={(v) => setPersonal({ email: v })} />
              <Field label="所在地区" value={draft.personal.location} onChange={(v) => setPersonal({ location: v })} />
            </div>
            <div className="mb-4">
              <Field label="简历文件路径" value={draft.personal.resumePath} onChange={(v) => setPersonal({ resumePath: v })} placeholder="/resume.pdf" />
            </div>
            <div className="mb-4">
              <TextArea
                label="个人简介（每行一段）"
                value={draft.personal.introLines.join('\n')}
                rows={4}
                onChange={(v) => setPersonal({ introLines: v.split('\n').filter((l) => l.trim() !== '') })}
              />
            </div>
            <div className="mb-4">
              <TextArea
                label="小目标（每行一条）"
                value={draft.personal.goals.join('\n')}
                rows={3}
                onChange={(v) => setPersonal({ goals: v.split('\n').filter((l) => l.trim() !== '') })}
              />
            </div>

            {/* 工作经历 */}
            <div className="mb-4">
              <span className="text-sm text-slate-300 mb-2 block">工作经历</span>
              <div className="space-y-3">
                {draft.settings.workExperience.map((w, i) => (
                  <div key={i} className="border border-slate-700 rounded p-3 space-y-2">
                    <Field label="职位" value={w.title} onChange={(v) => setSettings({ workExperience: draft.settings.workExperience.map((x, xi) => xi === i ? { ...x, title: v } : x) })} />
                    <Field label="公司" value={w.company} onChange={(v) => setSettings({ workExperience: draft.settings.workExperience.map((x, xi) => xi === i ? { ...x, company: v } : x) })} />
                    <Field label="时间" value={w.period} onChange={(v) => setSettings({ workExperience: draft.settings.workExperience.map((x, xi) => xi === i ? { ...x, period: v } : x) })} />
                    <TextArea label="描述" value={w.desc} onChange={(v) => setSettings({ workExperience: draft.settings.workExperience.map((x, xi) => xi === i ? { ...x, desc: v } : x) })} />
                    <button
                      className="text-xs text-red-400 hover:text-red-300"
                      onClick={() => setSettings({ workExperience: draft.settings.workExperience.filter((_, xi) => xi !== i) })}
                    >
                      删除该条
                    </button>
                  </div>
                ))}
                <button
                  className="text-sm text-blue-400 hover:text-blue-300"
                  onClick={() => setSettings({ workExperience: [...draft.settings.workExperience, { title: '', company: '', period: '', desc: '' }] })}
                >
                  + 新增工作经历
                </button>
              </div>
            </div>
          </section>
        )}

        {tab === 'skills' && (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">技能管理</h2>
            <div className="space-y-4">
              {draft.skills.map((s, i) => (
                <div key={s.id} className="border border-slate-700 rounded p-3 space-y-2">
                  <Field label="分类名" value={s.category} onChange={(v) => setDraft((d) => ({ ...d, skills: d.skills.map((x, xi) => xi === i ? { ...x, category: v } : x) }))} />
                  <Field label="图标" value={s.icon} onChange={(v) => setDraft((d) => ({ ...d, skills: d.skills.map((x, xi) => xi === i ? { ...x, icon: v } : x) }))} />
                  <TextArea label="内容（逗号分隔）" value={s.items} onChange={(v) => setDraft((d) => ({ ...d, skills: d.skills.map((x, xi) => xi === i ? { ...x, items: v } : x) }))} />
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'projects' && (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">项目管理</h2>
            <div className="space-y-4">
              {draft.projects.map((p, i) => (
                <div key={p.id} className="border border-slate-700 rounded p-3 space-y-2">
                  <Field label="标题" value={p.title} onChange={(v) => setDraft((d) => ({ ...d, projects: d.projects.map((x, xi) => xi === i ? { ...x, title: v } : x) }))} />
                  <TextArea label="描述" value={p.desc} onChange={(v) => setDraft((d) => ({ ...d, projects: d.projects.map((x, xi) => xi === i ? { ...x, desc: v } : x) }))} />
                  <Field label="技术栈" value={p.tech} onChange={(v) => setDraft((d) => ({ ...d, projects: d.projects.map((x, xi) => xi === i ? { ...x, tech: v } : x) }))} />
                  <button
                    className="text-xs text-red-400 hover:text-red-300"
                    onClick={() => setDraft((d) => ({ ...d, projects: d.projects.filter((_, xi) => xi !== i) }))}
                  >
                    删除该项目
                  </button>
                </div>
              ))}
              <button
                className="text-sm text-blue-400 hover:text-blue-300"
                onClick={() => setDraft((d) => ({ ...d, projects: [...d.projects, { id: `p${Date.now()}`, title: '', desc: '', tech: '' }] }))}
              >
                + 新增项目
              </button>
            </div>
          </section>
        )}

        {tab === 'blogs' && (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">博客管理</h2>
            <div className="space-y-4">
              {draft.blogs.map((b, i) => (
                <div key={b.id} className="border border-slate-700 rounded p-3 space-y-2">
                  <Field label="标题" value={b.title} onChange={(v) => setDraft((d) => ({ ...d, blogs: d.blogs.map((x, xi) => xi === i ? { ...x, title: v } : x) }))} />
                  <TextArea label="描述" value={b.desc} onChange={(v) => setDraft((d) => ({ ...d, blogs: d.blogs.map((x, xi) => xi === i ? { ...x, desc: v } : x) }))} />
                  <Field label="发布日期" value={b.date} onChange={(v) => setDraft((d) => ({ ...d, blogs: d.blogs.map((x, xi) => xi === i ? { ...x, date: v } : x) }))} />
                  <button
                    className="text-xs text-red-400 hover:text-red-300"
                    onClick={() => setDraft((d) => ({ ...d, blogs: d.blogs.filter((_, xi) => xi !== i) }))}
                  >
                    删除该博客
                  </button>
                </div>
              ))}
              <button
                className="text-sm text-blue-400 hover:text-blue-300"
                onClick={() => setDraft((d) => ({ ...d, blogs: [...d.blogs, { id: `b${Date.now()}`, title: '', desc: '', date: '' }] }))}
              >
                + 新增博客
              </button>
            </div>
          </section>
        )}

        {tab === 'settings' && (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">站点设置</h2>
            <div className="space-y-4">
              <Field label="网站名（导航栏标题）" value={draft.settings.siteName} onChange={(v) => setSettings({ siteName: v })} />
              <Field label="联系页欢迎语" value={draft.settings.welcome} onChange={(v) => setSettings({ welcome: v })} />
              <div>
                <span className="text-sm text-slate-300 mb-2 block">联系方式</span>
                <div className="space-y-2">
                  {draft.settings.contactLines.map((c, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        className="w-12 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-100 focus:outline-none"
                        value={c.icon}
                        onChange={(v) => setSettings({ contactLines: draft.settings.contactLines.map((x, xi) => xi === i ? { ...x, icon: v.target.value } : x) })}
                        placeholder="图标"
                      />
                      <input
                        className="w-24 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-100 focus:outline-none"
                        value={c.label}
                        onChange={(v) => setSettings({ contactLines: draft.settings.contactLines.map((x, xi) => xi === i ? { ...x, label: v.target.value } : x) })}
                        placeholder="名称"
                      />
                      <input
                        className="flex-1 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-100 focus:outline-none"
                        value={c.value}
                        onChange={(v) => setSettings({ contactLines: draft.settings.contactLines.map((x, xi) => xi === i ? { ...x, value: v.target.value } : x) })}
                        placeholder="内容"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 底部操作栏 */}
        <div className="mt-10 flex gap-3 border-t border-slate-800 pt-6">
          <button
            onClick={save}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded"
          >
            保存修改
          </button>
          <button
            onClick={reset}
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-6 py-2 rounded"
          >
            恢复默认
          </button>
          <button
            onClick={() => setDraft(data)}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2 rounded"
          >
            撤销（恢复已保存内容）
          </button>
        </div>
      </main>
    </div>
  )
}
