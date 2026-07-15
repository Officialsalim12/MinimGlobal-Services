'use client'

import { toast } from 'react-hot-toast'
import { useClothingCart } from '@/components/ClothingCartContext'

type Props = {
  productId: string
  productName: string
  className?: string
}

export default function ClothingAddToCartButton({
  productId,
  productName,
  className = 'mc-btn mc-btn-primary mc-btn-sm',
}: Props) {
  const { addItem } = useClothingCart()

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        addItem(productId, 1)
        toast.success(`${productName} added to cart`)
      }}
    >
      Add to cart
    </button>
  )
}
