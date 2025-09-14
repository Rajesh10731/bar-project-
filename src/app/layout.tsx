import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Business Expense Manager',
  description: 'A comprehensive business expense management system with advanced categorization and analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}