'use client'

import ClothingShell from '@/components/ClothingShell'
import { ClothingCartProvider } from '@/components/ClothingCartContext'

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClothingCartProvider>
      <ClothingShell>{children}</ClothingShell>
    </ClothingCartProvider>
  )
}
