import { formatCurrency, getDiscountedPrice } from '@/utils/features'
import React from 'react'
import css from './ProductPrice.module.css'

const ProductPrice = ({ price, discount, highlight }) => {
  const discounted = getDiscountedPrice(price, discount)

  return discount > 0 ? (
    <div>
      <span className={css.originalPrice}>{formatCurrency(price)}</span>
      <span className={`${css.price} ${highlight ? css.highlight : ''}`}>
        {formatCurrency(discounted)}
      </span>
    </div>
  ) : (
    <span className={`${css.price} ${highlight ? css.highlight : ''}`}>
      {formatCurrency(price)}
    </span>
  )
}

export default ProductPrice
