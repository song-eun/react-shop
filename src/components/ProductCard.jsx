import React from 'react'
import css from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import ProductPrice from './ProductPrice'
const ProductCard = ({ data }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrap}>
        <img src={`/public/img/${data.img}`} alt={data.title} />
        <span className={css.cate}>{data.category}</span>
        {data.discount > 0 && <span className={css.discount}>{`${data.discount}%`}</span>}
      </div>
      <div className={css.textWrap}>
        <strong className={css.title}>{data.title}</strong>
        <ProductPrice price={data.price} discount={data.discount} highlight={true} />
      </div>
      <Link to={`/detail/${data.id}`} className={css.btnGoDetail}>
        상품 상세 페이지
      </Link>
    </div>
  )
}

export default ProductCard
