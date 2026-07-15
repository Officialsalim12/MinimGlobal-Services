'use client'

import FoodShell from '@/components/FoodShell'
import { FoodCartProvider } from '@/components/FoodCartContext'

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FoodCartProvider>
      <FoodShell>{children}</FoodShell>
    </FoodCartProvider>
  )
}
