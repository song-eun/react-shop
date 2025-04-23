import React, { useEffect, useState } from 'react'
import css from './Modal.module.css'
import { formatCurrency, getDiscountedPrice } from '@/utils/features'
import { useNavigate } from 'react-router-dom'

const Modal = ({ product, count, onClose }) => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
      // 모달 뒤 body 스크롤 방지
      document.body.style.overflow = 'hidden'
    }, 5)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }

  const handleGoToCart = async () => {
    try {
      handleClose()
      navigate('/cart')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${css.modal} ${isActive && css.active}`}>
      <div className={css.container}>
        <p>상품이 장바구니에 추가되었습니다.</p>
        <hr />
        <div className={css.__inner}>
          <div className={css.productWrap}>
            <div className={css.imgWrap}>
              <img src={`/public/img/${product.img}`} alt="" />
            </div>
            <div className={css.info}>
              <p className={css.title}>{product.title}</p>
              <p>
                {formatCurrency(getDiscountedPrice(product.price, product.discount))} / {count} 개
              </p>
            </div>
          </div>
          <button onClick={handleGoToCart}>View Shopping Bag</button>
          <button onClick={handleClose}>Continue Shopping</button>
        </div>
        <button className={`${css.btnClose} bi bi-x-lg`} onClick={handleClose}></button>
      </div>
    </div>
  )
}

export default Modal
