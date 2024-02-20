// ProductsContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  fetchProducts,
  addProduct as apiAddProduct,
} from "../services/apiProducts";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch initial data when the component mounts
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const addedProduct = await apiAddProduct(newProduct);

      // If the product is added successfully, update the local state
      if (addedProduct) {
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
        console.log("Successfully added");
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  // Make other functions for updating and deleting products as needed

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("ProductsContext was used outside of ProductsProvider");
  return context;
}
export { ProductsProvider, useProductsContext };
