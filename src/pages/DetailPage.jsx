import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'

import DetailTabInfo from '@/organism/DetailTabInfo'
import SimilarProducts from '@/organism/SimilarProducts'
import { addToCart } from '@/api/cartApi'
import Modal from '@/components/Modal'
import ProductPrice from '@/components/ProductPrice'
import ItemCounter from '@/components/ItemCounter'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()
  const [count, setCount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddToCart = async () => {
    // 장바구니 상품을 추가 json-server 추가
    // cartItem = {
    //   "id": 1,
    //   "title": "14K/18K 허니 벌집2 헥사곤 심플 반지",
    //   "img": "image1.jpg",
    //   "price": 185000,
    //   "category": "new",
    //   "discount": 5
    //   "count": 1
    // }

    const cartItem = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      category: product.category,
      discount: product.discount,
      count,
    }

    try {
      await addToCart(cartItem)
      setIsModalOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <div className={css.detailCon}>
        <div className={css.imgWrap}>
          <img src={`/public/img/${product.img}`} alt={product.title} />
          {product.discount > 0 && <p className={css.discount}>{product.discount}%</p>}
        </div>
        <div className={css.infoWrap}>
          <p className={css.title}>{product.title}</p>
          <ProductPrice price={product.price} discount={product.discount} highlight={true} />

          <p className={css.category}>{product.category}</p>
          <div className={css.btnWrap}>
            <ItemCounter count={count} setCount={setCount} />
            <button className={css.addBtn} onClick={handleAddToCart}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
      <DetailTabInfo />
      <SimilarProducts relatedProducts={relatedProducts} />
      {isModalOpen && <Modal product={product} count={count} onClose={closeModal} />}
    </main>
  )
}

export default DetailPage
