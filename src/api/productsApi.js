import axios from 'axios'

export const getProductsByQuery = async query => {
  try {
    const response = await axios.get(`/api/products/?${query}`)
    return response.data
  } catch (error) {
    console.log(error)
    // throw error
  }
}

export const getProductById = async id => {
  try {
    const response = await axios.get(`/api/products/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    // throw error
  }
}

// export const getProductByCategory = async (category, limit = 10) => {
//   try {
//     const response = await axios.get(`/api/products/`, {
//       params: {
//         category,
//         _limit: limit,
//       },
//     })
//     return response.data
//   } catch (error) {
//     console.log(error)
//     return []
//   }
// }
