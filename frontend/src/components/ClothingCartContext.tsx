'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { CLOTHING_PRODUCTS, type ClothingProduct } from '@/data/clothing'

export type ClothingCartLine = {
  productId: string
  quantity: number
}

type ClothingCartContextValue = {
  lines: ClothingCartLine[]
  itemCount: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (productId: string, quantity?: number) => void
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  getProduct: (productId: string) => ClothingProduct | undefined
}

const STORAGE_KEY = 'minim-clothing-cart'
const ClothingCartContext = createContext<ClothingCartContextValue | null>(null)

function normalizeLines(raw: unknown): ClothingCartLine[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter(
      (line): line is Partial<ClothingCartLine> =>
        !!line &&
        typeof line === 'object' &&
        typeof (line as ClothingCartLine).productId === 'string'
    )
    .map((line) => ({
      productId: line.productId as string,
      quantity: Math.max(1, Number(line.quantity) || 1),
    }))
}

export function ClothingCartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<ClothingCartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setLines(normalizeLines(JSON.parse(raw)))
    } catch {
      // ignore bad storage
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, ready])

  const addItem = useCallback((productId: string, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId)
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: l.quantity + quantity }
            : l
        )
      }
      return [...prev, { productId, quantity }]
    })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId))
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.productId === productId ? { ...l, quantity } : l))
    )
  }, [])

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const getProduct = useCallback(
    (productId: string) => CLOTHING_PRODUCTS.find((p) => p.id === productId),
    []
  )

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  )

  const subtotal = useMemo(
    () =>
      lines.reduce((sum, l) => {
        const product = CLOTHING_PRODUCTS.find((p) => p.id === l.productId)
        return sum + (product ? product.price * l.quantity : 0)
      }, 0),
    [lines]
  )

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      getProduct,
    }),
    [
      lines,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      getProduct,
    ]
  )

  return (
    <ClothingCartContext.Provider value={value}>{children}</ClothingCartContext.Provider>
  )
}

export function useClothingCart() {
  const ctx = useContext(ClothingCartContext)
  if (!ctx) {
    throw new Error('useClothingCart must be used within ClothingCartProvider')
  }
  return ctx
}
