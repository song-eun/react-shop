import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { productId } = useParams()
  return <main>상품 아이디 : {productId}</main>
}

export default DetailPage
