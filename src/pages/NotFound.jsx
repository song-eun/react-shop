import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError()

  return (
    <main>
      <h2>NotFound</h2>
      <p>
        {error.status === 400 ? '요청한 페이지를 찾을 수 없습니다.' : '잠시 후 다시 실행해 주세요'}
        {error.data || error.statusText}
      </p>
    </main>
  )
}

export default NotFound
