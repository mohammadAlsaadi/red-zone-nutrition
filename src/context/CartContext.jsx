import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const storedCart = window.localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState(initialCart);
  const [cartCountItems, setCartCountItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  useEffect(() => {
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [storedCart]);

  useEffect(() => {
    setIsLoading(true);
    window.localStorage.setItem("cart", JSON.stringify(cart));
    setCartCountItems(cart.reduce((count, item) => count + item.count, 0));
    setIsLoading(false);
  }, [cart]);

  useEffect(() => {
    setIsLoading(true);

    window.localStorage.setItem("cart", JSON.stringify(cart));
    setCartCountItems(cart.reduce((count, item) => count + item.count, 0));
    setIsLoading(false);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("added to cart");
  };

  const incrementItem = (itemId) => {
    setIsLoading(true);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
    toast.success("Product was incremened successfully");
    setIsLoading(false);
  };

  const decrementItem = (productId) => {
    setIsLoading(true);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
    toast.success("Product was decremened successfully");

    setIsLoading(false);
  };

  const removeItem = (productId) => {
    setIsLoading(true);

    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Product was removed successfully");
    setIsLoading(false);
  };

  const clearCart = () => {
    setIsLoading(true);

    setCart([]);
    setIsLoading(false);
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
        isLoading,
        totalPrice,
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
