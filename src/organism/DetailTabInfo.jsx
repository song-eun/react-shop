import React, { useState } from 'react'
import css from './DetailTabInfo.module.css'

const DetailTabInfo = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabTitle = ['제목1', '제목2', '제목3']

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <p>
            상품 설명입니다. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam dolorem ea numquam maxime, at repellendus nostrum enim culpa quos velit
            maiores omnis? Rem mollitia quam vel, voluptate et adipisci eum.
          </p>
        )
      case 1:
        return (
          <p>
            상세 설명입니다. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam dolorem ea numquam maxime, at repellendus nostrum enim culpa quos velit
            maiores omnis? Rem mollitia quam vel, voluptate et adipisci eum.
          </p>
        )
      case 2:
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
    <>
      <div className={css.tabBtns}>
        {tabTitle.map((title, index) => (
          <button
            key={index}
            className={` ${activeTab === index ? css.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={css.tabContent}>{renderContent()}</div>
    </>
  )
}

export default DetailTabInfo
