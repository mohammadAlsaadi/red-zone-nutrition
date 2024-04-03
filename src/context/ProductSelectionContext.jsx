import { createContext, useContext, useState } from "react";

const ProductSelectionContext = createContext();

function ProductSelectionProvider({ children }) {
  const [activeProductSize, setActiveProductSize] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  return (
    <ProductSelectionContext.Provider
      value={{
        activeProductSize,
        selectedFlavor,
        setActiveProductSize,
        setSelectedFlavor,
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
}
function useProductSelection() {
  const context = useContext(ProductSelectionContext);
  if (context === undefined) {
    throw new Error(
      "ProductSelectionContext was used outside of ProductSelectionProvider"
    );
  }
  return context;
}
export { ProductSelectionProvider, useProductSelection };
