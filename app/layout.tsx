import type { Metadata } from 'next'
import { Inter, Moulpali } from 'next/font/google'
import './globals.css'
import { Mulish } from "next/font/google"

const mulish = Mulish({
  weight: ["400", "600"],
  subsets: ["latin"]
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '2Travel site',
  description: 'Travel site of city of Gothenburg',
  keywords: ['travel', 'sweden']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
