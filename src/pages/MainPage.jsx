import React, { lazy, Suspense } from 'react'
import LatestList from '../organism/LatestList'

// import HeroSlider from '../organism/HeroSlider'
const HeroSlider = lazy(() => import('@/organism/HeroSlider'))

const MainPage = () => {
  return (
    <main>
      <h2 hidden>MainPage</h2>
      <Suspense fallback={<div>Loading</div>}>
        <HeroSlider />
        <LatestList />
      </Suspense>
    </main>
  )
}

export default MainPage
