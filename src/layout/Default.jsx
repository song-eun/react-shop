import React, { Suspense } from 'react'
import Header from '@/organism/Header'
import Footer from '@/organism/Footer'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}

export default Default
