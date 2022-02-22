import * as React from 'react';
import { IProduct } from '../interfaces';
import { HandleAddToCartType } from '../../types';

interface ICartItem {
  [key: string]: IProduct;
}

interface ICartItems {
  count: number;
  items: ICartItem;
}

interface IInitialState {
  cartItems: ICartItems;
}

interface ICartContext extends IInitialState {
  handleAddToCart: HandleAddToCartType;
}

export const initialState: any = {
  cartItems: {
    count: 0,
    items: {}
  }
};

const CartContext = React.createContext<ICartContext>(initialState);

export const useCart = () => {
  return React.useContext(CartContext);
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState({ count: 0, items: {} });

  const addItem = (product: IProduct): void => {
    const { id } = product;

    setCartItems((prevState) => {
      const { items } = prevState;
      const newItems = { ...items, [id]: product };
      const count = Object.keys(newItems).length;

      return { ...prevState, items: { ...newItems }, count };
    });
  };

  const handleAddToCart = (product: IProduct) => {
    addItem(product);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
