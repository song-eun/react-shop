import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import css from './SimilarProducts.module.css'
import ProductCard from '@/components/ProductCard'

const SimilarProducts = ({ relatedProducts }) => {
  return (
    <div className={css.con}>
      <h2>Similar Items</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
            clickable: false,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className={css.similarSlider}
      >
        {relatedProducts.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SimilarProducts
