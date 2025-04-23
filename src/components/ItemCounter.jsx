import React from 'react'
import css from './ItemCounter.module.css'

const ItemCounter = ({ count, setCount }) => {
  const decrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }
  const increase = () => {
    setCount(prev => prev + 1)
  }
  return (
    <div className={css.counterArea}>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default ItemCounter
