import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'
import { formatCurrency } from '@/utils/features'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '@/components/ProductCard'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()
  const [activeTab, setActiveTab] = useState('desc')

  const renderContent = () => {
    switch (activeTab) {
      case 'desc':
        return (
          <p>
            상품 설명입니다. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam dolorem ea numquam maxime, at repellendus nostrum enim culpa quos velit
            maiores omnis? Rem mollitia quam vel, voluptate et adipisci eum.
          </p>
        )
      case 'info':
        return (
          <p>
            상세 설명입니다. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam dolorem ea numquam maxime, at repellendus nostrum enim culpa quos velit
            maiores omnis? Rem mollitia quam vel, voluptate et adipisci eum.
          </p>
        )
      case 'review':
        return (
          <p>
            리뷰 내용입니다. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam dolorem ea numquam maxime, at repellendus nostrum enim culpa quos velit
            maiores omnis? Rem mollitia quam vel, voluptate et adipisci eum.
          </p>
        )
    }
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
      <section className={css.tab}>
        <div className={css.tabBtns}>
          <button
            className={` ${activeTab === 'desc' ? css.active : ''}`}
            onClick={() => setActiveTab('desc')}
          >
            Description
          </button>
          <button
            className={` ${activeTab === 'info' ? css.active : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Additional information
          </button>
          <button
            className={` ${activeTab === 'review' ? css.active : ''}`}
            onClick={() => setActiveTab('review')}
          >
            Reviews(0)
          </button>
        </div>
        <div className={css.tabContent}>{renderContent()}</div>
      </section>
      <section className={css.relatedItems}>
        <h2>Similar Items</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className={css.relatedSlider}
        >
          {relatedProducts.map(item => (
            <SwiperSlide>
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  )
}

export default DetailPage
