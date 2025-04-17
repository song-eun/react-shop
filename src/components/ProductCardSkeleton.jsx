import React from 'react'
import css from './ProductCardSkeleton.module.css'

const ProductCardSkeleton = () => {
  return (
    <>
      <div className={`skeleton ${css.img}`}></div>
      <div className={`skeleton ${css.title}`}>타이틀</div>
      <div className={`skeleton ${css.price}`}>가격</div>
    </>
  )
}

export default ProductCardSkeleton
