import videos from "@/data/pognali-videos.json"

export type SiteSearchItem = {
  id: string
  title: string
  description: string
  href: string
  type: "video" | "page"
}

const pages: SiteSearchItem[] = [
  {
    id: "home",
    title: "Главная",
    description: "Интерактивная паутина архива и главные разделы сайта",
    href: "/",
    type: "page",
  },
  {
    id: "videos",
    title: "Все видео",
    description: "Каталог роликов с YouTube-плеером",
    href: "/videos",
    type: "page",
  },
  {
    id: "biography",
    title: "Биография",
    description: "История жизни и творчества Димы Масленникова",
    href: "/biography",
    type: "page",
  },
  {
    id: "gallery",
    title: "Галерея",
    description: "Фото, кадры и визуальные материалы архива",
    href: "/gallery",
    type: "page",
  },
  {
    id: "facts",
    title: "Факты",
    description: "Малоизвестные факты и заметки об archive-вселенной",
    href: "/facts",
    type: "page",
  },
  {
    id: "about",
    title: "О проекте",
    description: "Описание архива, принципы и контакты",
    href: "/about",
    type: "page",
  },
]

export const siteSearchItems: SiteSearchItem[] = [
  ...pages,
  ...videos.map((video) => ({
    id: `video-${video.id}`,
    title: video.title,
    description: `${video.views || "YouTube"}${video.duration ? ` • ${video.duration}` : ""}`,
    href: `/videos?video=${video.id}`,
    type: "video" as const,
  })),
]
