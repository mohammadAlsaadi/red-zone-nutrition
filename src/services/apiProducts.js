// apiProducts.js
export async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addProduct(newProduct) {
  try {
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      // If the product is added successfully, return the added product
      const addedProduct = await response.json();
      return addedProduct;
    } else {
      console.error("Failed to add product:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
}
