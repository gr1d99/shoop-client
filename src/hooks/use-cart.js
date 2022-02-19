import React from 'react';

const useCart = () => {
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

  return { cartItems, handleAddToCart };
};

export default useCart;
