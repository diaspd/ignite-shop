import { ReactNode, createContext, useState } from "react";

export interface CartProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPrice: string;
}

interface CartContext {
  cartItems: CartProduct[];
  cartTotalItems: number;
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: string) => void;
  ItemAlreadyInCart: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as any);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [ cartItems, setCartItems ] = useState<CartProduct[]>([])

  const cartTotalItems = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function addProductToCart(product: CartProduct) {
    setCartItems((state) => [...state, product])
  }

  function removeProductFromCart(productId: string) {
    setCartItems((state) => state.filter(item => item.id !== productId))
  }

  function ItemAlreadyInCart(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider value={{ cartItems, cartTotalItems, addProductToCart, removeProductFromCart, ItemAlreadyInCart, }}>
      {children}
    </CartContext.Provider>
  )
}