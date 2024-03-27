import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../pages/Home'

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
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api
export default api
