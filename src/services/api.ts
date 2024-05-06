import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../pages/Home'

type Product = {
  id: number
  price: number
}
type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    document: string
    email: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Game[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Game, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api
export default api
