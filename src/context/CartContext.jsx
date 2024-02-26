import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCountItems, setCartCountItems] = useState(0);

  useEffect(() => {
    const storedCart = window.localStorage.getItem("cart");
    // setCartCountItems(
    //   storedCart.reduce((count, item) => count + item.count, 0)
    // );

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    setCartCountItems(cart.reduce((count, item) => count + item.count, 0));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item already exists, increment its count
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      // If the item doesn't exist, add it to the cart
      setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
      toast.success("added to cart");
    }
  };

  const incrementItem = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementItem = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementItem,
        decrementItem,
        removeItem,
        clearCart,
        cartCountItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("CartContext was used outside of CartProvider");
  }
  return context;
}

export { CartProvider, useCartContext };
