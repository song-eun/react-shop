import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import css from './LatestList.module.css'
import ProductCard from '../components/ProductCard'
import { getProductsData } from '../api/productsApi'
import ProductCardSkeleton from '../components/ProductCardSkeleton'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const LatestList = () => {
  const [products, setProducts] = useState([])
  const [listCount, setListCount] = useState(6)
  const [loading, setLoading] = useState(false)

  const gridOptions = [
    { count: 4, icon: 'bi-grid' },
    { count: 6, icon: 'bi-grid-3x2-gap' },
    { count: 9, icon: 'bi-grid-3x3-gap' },
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProductsData(`category=new&_limit=${listCount}`)
        await delay(1000)
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [listCount])

  return (
    <section className={css.listCon}>
      <h2>Shop the Latest</h2>
      <div className={css.viewControls}>
        {gridOptions.map(({ count, icon }) => (
          <i
            key={count}
            className={listCount === count ? `bi ${icon}-fill` : `bi ${icon}`}
            onClick={() => setListCount(count)}
          ></i>
        ))}

        <Link to={'/shop'} className={css.more}>
          View All
        </Link>
      </div>
      <ul className={`${css.list} ${css[`grid${listCount}`]}`}>
        {loading
          ? Array.from({ length: listCount }).map((_, index) => (
              <li key={index}>
                <ProductCardSkeleton />
              </li>
            ))
          : products.map(item => (
              <li key={item.id}>
                <ProductCard data={item} key={item.id} />
              </li>
            ))}
      </ul>
    </section>
  )
}

export default LatestList
