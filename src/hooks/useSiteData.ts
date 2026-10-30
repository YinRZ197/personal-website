import { useCallback, useState } from 'react'
import { defaultSiteData, STORAGE_KEY, type SiteData } from '../data/siteData'

/**
 * 读取全站数据：优先取 localStorage，无则用默认数据。
 * 每次页面挂载时读取，管理后台保存后会写入 localStorage，
 * 刷新或跳转页面时前台即可读到最新内容。
 */
function loadData(): SiteData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as SiteData
      // 简单兜底：避免结构缺失导致前台崩溃
      if (parsed && parsed.personal && parsed.skills && parsed.projects && parsed.blogs && parsed.settings) {
        return parsed
      }
    }
  } catch {
    // localStorage 数据损坏时回退默认
  }
  return defaultSiteData
}

export function useSiteData() {
  const [data, setData] = useState<SiteData>(loadData)

  // 保存到 localStorage
  const saveData = useCallback((next: SiteData) => {
    setData(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // 存储失败不阻塞页面
    }
  }, [])

  // 重置为默认数据（清空自定义修改）
  const resetData = useCallback(() => {
    setData(defaultSiteData)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  return { data, saveData, resetData }
}
