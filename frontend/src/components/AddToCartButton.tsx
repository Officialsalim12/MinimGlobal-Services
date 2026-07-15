'use client'

import { toast } from 'react-hot-toast'
import { useFoodCart } from '@/components/FoodCartContext'

type Props = {
  productId: string
  productName: string
}

export default function AddToCartButton({ productId, productName }: Props) {
  const { addItem } = useFoodCart()

  return (
    <button
      type="button"
      className="mf-btn mf-btn-primary"
      onClick={() => {
        addItem(productId, 1)
        toast.success(`${productName} added to cart`)
      }}
    >
      Add to cart
    </button>
  )
}
