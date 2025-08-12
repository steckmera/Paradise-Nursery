import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
  items: [] // { id, name, price, image, quantity }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        }
      }
      return { ...state, items: [...state.items, { ...action.product, quantity: 1 }] }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'INCREASE':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i) }
    case 'DECREASE':
      return { ...state, items: state.items
        .map(i => i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
      }
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export function useCart() {
  return useContext(CartContext)
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => dispatch({ type: 'ADD', product })
  const removeFromCart = (id) => dispatch({ type: 'REMOVE', id })
  const increase = (id) => dispatch({ type: 'INCREASE', id })
  const decrease = (id) => dispatch({ type: 'DECREASE', id })
  const clear = () => dispatch({ type: 'CLEAR' })

  const getCartCount = () => state.items.reduce((s, i) => s + i.quantity, 0)
  const getCartTotal = () => state.items.reduce((s, i) => s + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      addToCart,
      removeFromCart,
      increase,
      decrease,
      clear,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}