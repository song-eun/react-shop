import { formatCurrency, getDiscountedPrice } from '@/utils/features'
import React from 'react'
import css from './ProdcutPrice.module.css'

const ProductPrice = ({ price, discount }) => {
  const discounted = getDiscountedPrice(price, discount)

  return discount > 0 ? (
    <div>
      <span className={css.originalPrice}>{formatCurrency(price)}</span>
      <span className={css.price}>{formatCurrency(discounted)}</span>
    </div>
  ) : (
    <span className={css.price}>{formatCurrency(price)}</span>
  )
}

export default ProductPrice
