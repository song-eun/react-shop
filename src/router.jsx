import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Default from './layout/Default'
import NotFound from './pages/NotFound'
import Loading from './components/Loading'
import DetailPage from './pages/DetailPage'
import { detailPageLoader } from './loaders/productsLoaders'
// import MainPage from "./pages/MainPage"
const MainPage = lazy(() => import('./pages/MainPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CartPage = lazy(() => import('./pages/CartPage'))

let router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      // {
      //   path: '/detail/:productId',
      //   element: <DetailPage />,
      // },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
        loader: detailPageLoader,
      },
    ],
  },
])

export default router
