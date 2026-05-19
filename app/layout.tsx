import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Maslennikov Archive | Полная История Димы',
  description: 'Самый полный цифровой архив жизни и творчества Димы Масленникова. Интерактивная хронология, каталог видео, галерея и многое другое.',
  keywords: ['Дима Масленников', 'Maslennikov', 'архив', 'видео', 'Abandoned', 'YouTube'],
  openGraph: {
    title: 'Maslennikov Archive | Полная История Димы',
    description: 'Самый полный цифровой архив жизни и творчества Димы Масленникова',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
