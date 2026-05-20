"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Calendar, Eye, Film, MousePointer2, Sparkles, X, ZoomIn } from "lucide-react"
import type { ReactNode } from "react"

type WebEvent = {
  id: string
  year: number
  title: string
  type: "format" | "video" | "turning" | "music" | "archive"
  description: string
  frames: string[]
  impact: string
}

type WebPoint = {
  id: string
  kind: "year" | "event"
  year: number
  title: string
  x: number
  y: number
  z: number
  radius: number
  event?: WebEvent
}

type ProjectedPoint = WebPoint & {
  sx: number
  sy: number
  scale: number
  visible: boolean
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 2014 + 1 }, (_, index) => 2014 + index)

const webEvents: WebEvent[] = [
  {
    id: "first-videos",
    year: 2014,
    title: "Первые ролики",
    type: "turning",
    description: "Стартовая точка архива: первые эксперименты, голос канала и ранняя монтажная интонация.",
    frames: ["Канал", "Влог", "Эксперимент"],
    impact: "Задает центр всей паутины."
  },
  {
    id: "hide-and-seek",
    year: 2016,
    title: "Первые Прятки",
    type: "format",
    description: "Формат, который превращает пространство в игру: поиск, напряжение, команда и сильная динамика.",
    frames: ["Локация", "Команда", "Игра"],
    impact: "Одна из ранних веток шоу-механик."
  },
  {
    id: "million-videos",
    year: 2017,
    title: "Ролики-миллионники",
    type: "video",
    description: "Период, когда отдельные выпуски начинают жить как самостоятельные события для аудитории.",
    frames: ["Пик", "Виральность", "Реакции"],
    impact: "Паутина резко расширяется."
  },
  {
    id: "ghostbuster-start",
    year: 2018,
    title: "Первый GhostBuster",
    type: "format",
    description: "Мистическая ветка: заброшенные места, расследования и ощущение фонаря в темном коридоре.",
    frames: ["Ночь", "Фонарь", "След"],
    impact: "Открывает будущую abandoned-эстетику."
  },
  {
    id: "abandoned",
    year: 2019,
    title: "Abandoned",
    type: "format",
    description: "Заброшенные пространства становятся одним из главных визуальных языков канала.",
    frames: ["Здание", "Архив", "Страх"],
    impact: "Главная радиальная нить становится толще."
  },
  {
    id: "league",
    year: 2020,
    title: "Создание «Лиги»",
    type: "turning",
    description: "Командная мифология проекта: постоянные участники, роли и узнаваемая химия в кадре.",
    frames: ["Команда", "Роли", "Серия"],
    impact: "Добавляет поперечные связи между форматами."
  },
  {
    id: "studio",
    year: 2021,
    title: "Студия и продакшен",
    type: "turning",
    description: "Рост масштаба: больше контроля над съемками, сложнее визуальная упаковка, плотнее производство.",
    frames: ["Свет", "Сцена", "Монтаж"],
    impact: "Паутина получает новый слой глубины."
  },
  {
    id: "music",
    year: 2022,
    title: "Музыкальная ветка",
    type: "music",
    description: "Отдельная линия творчества: релизы, клиповая эстетика и пересечение YouTube с музыкой.",
    frames: ["Трек", "Клип", "Сцена"],
    impact: "Создает боковую нить вне основных форматов."
  },
  {
    id: "new-scale",
    year: 2024,
    title: "Новая глава",
    type: "archive",
    description: "Свежие проекты, переосмысление старых рубрик и подготовка базы для полного цифрового архива.",
    frames: ["Обновление", "База", "Поиск"],
    impact: "Архив становится самостоятельной картой вселенной."
  },
  {
    id: "future-archive",
    year: Math.min(currentYear, 2026),
    title: "Живой архив",
    type: "archive",
    description: "Точка настоящего: сюда будут добавляться новые события, видео, транскрипции и факты.",
    frames: ["Сегодня", "AI", "Комьюнити"],
    impact: "Паутина продолжает расти."
  }
]

const typeStyles = {
  format: "bg-orange-500/15 text-orange-200 border-orange-400/30",
  video: "bg-red-500/15 text-red-200 border-red-400/30",
  turning: "bg-zinc-400/10 text-zinc-100 border-zinc-300/25",
  music: "bg-amber-400/15 text-amber-100 border-amber-300/30",
  archive: "bg-cyan-400/15 text-cyan-100 border-cyan-300/30"
}

export function Timeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const pointsRef = useRef<ProjectedPoint[]>([])
  const hoveredRef = useRef<ProjectedPoint | null>(null)
  const selectedEventRef = useRef<WebEvent | null>(webEvents[0])
  const selectedYearRef = useRef(2014)
  const [selectedYear, setSelectedYear] = useState<number>(2014)
  const [selectedEvent, setSelectedEvent] = useState<WebEvent | null>(webEvents[0])
  const [depth, setDepth] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  const yearEvents = useMemo(
    () => webEvents.filter((event) => event.year === selectedYear),
    [selectedYear]
  )

  useEffect(() => {
    selectedEventRef.current = selectedEvent
  }, [selectedEvent])

  useEffect(() => {
    selectedYearRef.current = selectedYear
  }, [selectedYear])

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    let width = 0
    let height = 0
    let animationFrame = 0
    let pointer = { x: -1000, y: -1000 }
    let localDepth = depth
    let targetDepth = depth

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(rect.width, 320)
      height = Math.max(rect.height, 520)
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const project = (point: WebPoint, time: number): ProjectedPoint => {
      const wind = isReducedMotion ? 0 : Math.sin(time * 0.0015 + point.year * 0.7 + point.z) * 7
      const drift = isReducedMotion ? 0 : Math.cos(time * 0.001 + point.x * 0.01) * 5
      const cameraZ = 560 + localDepth * 430
      const z = point.z + localDepth * 270
      const scale = cameraZ / (cameraZ + z)

      return {
        ...point,
        sx: width / 2 + (point.x + wind) * scale,
        sy: height / 2 + (point.y + drift) * scale,
        scale,
        visible: scale > 0.18
      }
    }

    const buildPoints = (): WebPoint[] => {
      const ringGap = Math.min(width, height) * 0.045
      const baseRadius = Math.min(width, height) * 0.08

      const yearPoints = years.map((year, index) => {
        const angle = -Math.PI / 2 + index * 0.58
        const radius = baseRadius + index * ringGap
        return {
          id: `year-${year}`,
          kind: "year" as const,
          year,
          title: String(year),
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius * 0.68,
          z: index * 72,
          radius: year === selectedYearRef.current ? 12 : 9
        }
      })

      const eventPoints = webEvents.map((event, index) => {
        const yearIndex = Math.max(0, event.year - 2014)
        const anchor = yearPoints[yearIndex] ?? yearPoints[yearPoints.length - 1]
        const offsetAngle = (index % 2 === 0 ? 1 : -1) * (0.62 + (index % 3) * 0.14)
        const distance = 62 + (index % 4) * 18

        return {
          id: event.id,
          kind: "event" as const,
          year: event.year,
          title: event.title,
          x: anchor.x + Math.cos(offsetAngle + yearIndex * 0.35) * distance,
          y: anchor.y + Math.sin(offsetAngle + yearIndex * 0.28) * distance * 0.75,
          z: anchor.z + 28 + (index % 3) * 24,
          radius: selectedEventRef.current?.id === event.id ? 9 : 6,
          event
        }
      })

      return [...yearPoints, ...eventPoints]
    }

    const drawLine = (
      a: ProjectedPoint,
      b: ProjectedPoint,
      color: string,
      alpha: number,
      widthValue: number,
      time: number
    ) => {
      if (!a.visible || !b.visible) {
        return
      }

      const middleX = (a.sx + b.sx) / 2 + Math.sin(time * 0.001 + a.year) * 8
      const middleY = (a.sy + b.sy) / 2 + Math.cos(time * 0.0012 + b.year) * 8

      context.beginPath()
      context.moveTo(a.sx, a.sy)
      context.quadraticCurveTo(middleX, middleY, b.sx, b.sy)
      context.strokeStyle = color.replace("ALPHA", String(alpha))
      context.lineWidth = widthValue
      context.stroke()
    }

    const drawNode = (point: ProjectedPoint, time: number) => {
      if (!point.visible) {
        return
      }

      const isHovered = hoveredRef.current?.id === point.id
      const isSelected = point.kind === "year" ? point.year === selectedYearRef.current : selectedEventRef.current?.id === point.id
      const distance = Math.hypot(pointer.x - point.sx, pointer.y - point.sy)
      const pulse = Math.max(0, 1 - distance / 120)
      const glow = isHovered || isSelected ? 1 : pulse
      const radius = (point.radius + glow * 4) * point.scale
      const color = point.kind === "year" ? "255, 180, 72" : "255, 82, 49"

      context.save()
      context.shadowColor = `rgba(${color}, ${0.35 + glow * 0.45})`
      context.shadowBlur = 18 + glow * 22
      context.beginPath()
      context.arc(point.sx, point.sy, radius + 10 * glow, 0, Math.PI * 2)
      context.fillStyle = `rgba(${color}, ${0.08 + glow * 0.12})`
      context.fill()

      context.beginPath()
      context.arc(point.sx, point.sy, Math.max(radius, 3.2), 0, Math.PI * 2)
      context.fillStyle = point.kind === "year" ? "#ffb448" : "#ff5231"
      context.fill()
      context.restore()

      if (point.kind === "year" && point.scale > 0.5) {
        context.font = `${Math.round(12 + point.scale * 4)}px Montserrat, Inter, sans-serif`
        context.fillStyle = isSelected ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.68)"
        context.fillText(String(point.year), point.sx + 14 * point.scale, point.sy - 12 * point.scale)
      }

      if ((isHovered || isSelected) && point.kind === "event") {
        context.font = "12px Inter, sans-serif"
        context.fillStyle = "rgba(255,255,255,0.88)"
        context.fillText(point.title, point.sx + 14, point.sy - 10)
      }

      if (!isReducedMotion && glow > 0.05) {
        const sparkAngle = (time * 0.006 + point.year) % (Math.PI * 2)
        context.beginPath()
        context.arc(point.sx, point.sy, radius + 18 + glow * 8, sparkAngle, sparkAngle + 0.75)
        context.strokeStyle = `rgba(255,255,255,${0.08 + glow * 0.22})`
        context.lineWidth = 2
        context.stroke()
      }
    }

    const draw = (time: number) => {
      localDepth += (targetDepth - localDepth) * 0.08
      context.clearRect(0, 0, width, height)

      const gradient = context.createRadialGradient(width * 0.5, height * 0.45, 40, width * 0.5, height * 0.5, width * 0.72)
      gradient.addColorStop(0, "rgba(255, 91, 49, 0.12)")
      gradient.addColorStop(0.5, "rgba(16, 18, 23, 0.7)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.95)")
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      const rawPoints = buildPoints()
      const points = rawPoints.map((point) => project(point, time)).filter((point) => point.visible)
      pointsRef.current = points

      const yearPoints = points.filter((point) => point.kind === "year")
      const eventPoints = points.filter((point) => point.kind === "event")

      for (let i = 0; i < yearPoints.length - 1; i++) {
        drawLine(yearPoints[i], yearPoints[i + 1], "rgba(255,255,255,ALPHA)", 0.13, 1.15, time)
      }

      for (let i = 0; i < yearPoints.length; i++) {
        for (let j = i + 2; j < yearPoints.length; j += 4) {
          drawLine(yearPoints[i], yearPoints[j], "rgba(255,135,68,ALPHA)", 0.045, 0.75, time)
        }
      }

      for (const eventPoint of eventPoints) {
        const anchor = yearPoints.find((point) => point.year === eventPoint.year)
        if (anchor) {
          drawLine(anchor, eventPoint, "rgba(255,82,49,ALPHA)", 0.2, eventPoint.year === selectedYearRef.current ? 1.6 : 1, time)
        }
      }

      const active = points.find((point) => point.id === hoveredRef.current?.id || point.id === selectedEventRef.current?.id)
      if (active && !isReducedMotion) {
        const branch = active.kind === "event" ? yearPoints.find((point) => point.year === active.year) : active
        if (branch) {
          const progress = (time * 0.0005) % 1
          const x = branch.sx + (active.sx - branch.sx) * progress
          const y = branch.sy + (active.sy - branch.sy) * progress
          context.beginPath()
          context.arc(x, y, 4 + Math.sin(time * 0.01) * 2, 0, Math.PI * 2)
          context.fillStyle = "rgba(255, 245, 210, 0.9)"
          context.shadowColor = "rgba(255, 177, 72, 0.9)"
          context.shadowBlur = 22
          context.fill()
          context.shadowBlur = 0
        }
      }

      for (const point of [...yearPoints, ...eventPoints]) {
        drawNode(point, time)
      }

      animationFrame = requestAnimationFrame(draw)
    }

    const getCanvasPoint = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      return { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    const updateHover = (event: MouseEvent) => {
      pointer = getCanvasPoint(event)
      const hit = [...pointsRef.current]
        .reverse()
        .find((point) => Math.hypot(pointer.x - point.sx, pointer.y - point.sy) <= 20 + point.radius * point.scale)
      hoveredRef.current = hit ?? null
      canvas.style.cursor = hit ? "pointer" : "crosshair"
    }

    const clickNode = (event: MouseEvent) => {
      const cursor = getCanvasPoint(event)
      const hit = [...pointsRef.current]
        .reverse()
        .find((point) => Math.hypot(cursor.x - point.sx, cursor.y - point.sy) <= 22 + point.radius * point.scale)

      if (!hit) {
        return
      }

      setSelectedYear(hit.year)
      if (hit.kind === "event" && hit.event) {
        setSelectedEvent(hit.event)
      } else {
        setSelectedEvent(webEvents.find((item) => item.year === hit.year) ?? null)
      }
      setDepth(Math.max(0, Math.min(1, (hit.year - 2014) / Math.max(years.length - 1, 1))))
    }

    const zoomWeb = (event: WheelEvent) => {
      if (!event.shiftKey && Math.abs(event.deltaY) < 4) {
        return
      }

      event.preventDefault()
      targetDepth = Math.max(0, Math.min(1, targetDepth + event.deltaY * 0.0009))
      setDepth(targetDepth)
      const nextYear = years[Math.min(years.length - 1, Math.round(targetDepth * (years.length - 1)))]
      setSelectedYear(nextYear)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(wrap)
    canvas.addEventListener("mousemove", updateHover)
    const leaveCanvas = () => {
      hoveredRef.current = null
    }

    canvas.addEventListener("mouseleave", leaveCanvas)
    canvas.addEventListener("click", clickNode)
    canvas.addEventListener("wheel", zoomWeb, { passive: false })
    animationFrame = requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      canvas.removeEventListener("mousemove", updateHover)
      canvas.removeEventListener("mouseleave", leaveCanvas)
      canvas.removeEventListener("click", clickNode)
      canvas.removeEventListener("wheel", zoomWeb)
      cancelAnimationFrame(animationFrame)
    }
  }, [depth, isReducedMotion])

  return (
    <section id="timeline" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(239,68,68,0.13),transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Живая паутина архива
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
              Хронология как заброшенная сеть
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Годы расходятся радиальными нитями от 2014-го. Узлы-коконы подсвечивают ключевые события: форматы,
            миллионные ролики, переломные моменты, музыку и текущий архив.
          </p>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div
            ref={wrapRef}
            className="relative min-h-[620px] overflow-hidden rounded-lg border border-border bg-black shadow-2xl"
          >
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label="Интерактивная паутина хронологии" />
            <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
              <Hint icon={<MousePointer2 className="h-3.5 w-3.5" />} text="Наведи на узел" />
              <Hint icon={<ZoomIn className="h-3.5 w-3.5" />} text="Колесо мыши приближает годы" />
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 right-4">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-cyan-300 transition-all duration-300"
                  style={{ width: `${Math.max(5, depth * 100)}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/55">
                <span>2014 / центр</span>
                <span>{selectedYear} / выбранная ветка</span>
                <span>{currentYear} / настоящее</span>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Выбранный год</p>
                  <h3 className="mt-1 font-serif text-5xl font-bold text-foreground">{selectedYear}</h3>
                </div>
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setSelectedEvent(webEvents.find((event) => event.year === year) ?? null)
                      setDepth(Math.max(0, Math.min(1, (year - 2014) / Math.max(years.length - 1, 1))))
                    }}
                    className={`rounded-md border px-2 py-2 text-xs transition-colors ${
                      year === selectedYear
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-secondary/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {selectedEvent ? (
                <EventPreview key={selectedEvent.id} event={selectedEvent} onClose={() => setSelectedEvent(null)} />
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="rounded-lg border border-dashed border-border bg-card/60 p-5 text-sm leading-7 text-muted-foreground"
                >
                  Кликни по светящемуся кокону на паутине, чтобы открыть превью события.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                <Film className="h-4 w-4 text-primary" />
                Ветка {selectedYear}
              </h3>
              <div className="space-y-2">
                {yearEvents.length > 0 ? (
                  yearEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full rounded-md border border-border bg-secondary/25 p-3 text-left transition-colors hover:bg-secondary"
                    >
                      <span className="block text-sm font-medium text-foreground">{event.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{event.impact}</span>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Для этого года пока нет заполненных событий. Узел года уже готов для будущего контента.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Hint({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
      {icon}
      {text}
    </span>
  )
}

function EventPreview({ event, onClose }: { event: WebEvent; onClose: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.22 }}
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative min-h-40 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.34),transparent_15rem),linear-gradient(135deg,rgba(0,0,0,0.86),rgba(24,24,27,0.88))] p-5">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-black/35 text-white/75 transition hover:text-white"
          aria-label="Закрыть превью"
        >
          <X className="h-4 w-4" />
        </button>
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${typeStyles[event.type]}`}>
          {event.year} / {event.type}
        </span>
        <h3 className="mt-4 max-w-[16rem] font-serif text-2xl font-bold text-white">{event.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/68">{event.impact}</p>
      </div>
      <div className="space-y-4 p-5">
        <p className="text-sm leading-7 text-muted-foreground">{event.description}</p>
        <div className="grid grid-cols-3 gap-2">
          {event.frames.map((frame) => (
            <div
              key={frame}
              className="grid aspect-video place-items-center rounded-md border border-border bg-secondary/40 px-2 text-center text-xs text-muted-foreground"
            >
              {frame}
            </div>
          ))}
        </div>
        <a
          href={`/videos?year=${event.year}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          Смотреть материалы года
        </a>
      </div>
    </motion.article>
  )
}
