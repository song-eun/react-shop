import React from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'
import { formatCurrency } from '@/utils/features'

import DetailTabInfo from '@/organism/DetailTabInfo'
import SimilarProducts from '@/organism/SimilarProducts'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()

  return (
    <main>
      <div className={css.detailCon}>
        <div className={css.imgWrap}>
          <img src={`/public/img/${product.img}`} alt={product.title} />
          {product.discount > 0 && <p className={css.discount}>{product.discount}%</p>}
        </div>
        <div className={css.infoWrap}>
          <p className={css.title}>{product.title}</p>
          <p className={css.price}>{formatCurrency(product.price)}</p>
          <p className={css.category}>{product.category}</p>
          <div className={css.btnWrap}>
            <div className={css.counterArea}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={css.addBtn}>장바구니 담기</button>
          </div>
        </div>
      </div>
      <DetailTabInfo />
      <SimilarProducts relatedProducts={relatedProducts} />
    </main>
  )
}

export default DetailPage
