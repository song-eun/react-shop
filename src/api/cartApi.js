import axios from 'axios'

export const getCartData = async () => {
  try {
    const response = await axios.get(`/api/cart/`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addToCart = async item => {
  try {
    // 장바구니 데이터 가져오기
    console.log('addToCart---', item)
    const cart = await getCartData()
    const existingItem = cart.find(cartItem => item.id === cartItem.id)

    if (existingItem) {
      const response = await axios.patch(`/api/cart/${existingItem.id}`, {
        count: existingItem.count + item.count,
      })

      return response.data
    } else {
      const response = await axios.post(`/api/cart/`, item)

      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
