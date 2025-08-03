import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pind Daan Services - Gaya, India | Spiritual Rituals',
  description: 'Authentic Pind Daan services in Gaya, India. Book experienced priests for traditional Hindu rituals. Vishnupad Temple, Ganga River ceremonies.',
  keywords: 'Pind Daan, Gaya, Hindu rituals, Vishnupad Temple, Ganga River, spiritual services',
  authors: [{ name: 'Pind Daan Services' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#f5f2ec',
              color: '#78350f',
              border: '1px solid #f59e0b',
            },
          }}
        />
      </body>
    </html>
  )
} 