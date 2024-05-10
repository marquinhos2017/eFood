import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardapio } from '../../pages/Home'

type CartState = {
  items: cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<cardapio>) => {
      const game = state.items.find((item) => item.nome === action.payload.nome)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert(' O item ja esta adicionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id_cardapio !== action.payload
      )
      console.log(state.items)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    ver: (state, action: PayloadAction<string>) => {
      console.log(state.items)
    }
  }
})

export const { add, open, close, remove, ver } = cartSlice.actions
export default cartSlice.reducer
