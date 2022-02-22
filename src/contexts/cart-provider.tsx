import React from 'react';

const CartContext = React.createContext({
  cartItems: {
    count: 0,
    items: {}
  },
  handleAddToCart: (item) => {}
});

export const useCart = () => {
  return React.useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState({ count: 0, items: {} });

  const addItem = (product) => {
    const { id } = product;

    setCartItems((prevState) => {
      const { items } = prevState;
      const newItems = { ...items, [id]: product };
      const count = Object.keys(newItems).length;

      return { ...prevState, items: { ...newItems }, count };
    });
  };

  const handleAddToCart = (product) => {
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
