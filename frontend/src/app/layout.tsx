import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ReduxProvider from '@/components/ReduxProvider'
import { Toaster } from 'react-hot-toast'
import PageLoader from '@/components/PageLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Minim Global Services',
  description:
    'Minim Global Services is a leading company dedicated to providing top quality services across various industries. The future that connects us together!',
  keywords:
    'Minim Global, Media Studios, Food Services, Architecture, Engineering, Clothing, Sierra Leone',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#110c5b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider>
            <PageLoader />
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
