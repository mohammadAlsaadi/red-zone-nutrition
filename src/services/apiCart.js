export async function fetchCart() {
  try {
    const response = await fetch("http://localhost:3001/cart");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addNewItem(newItem) {
  // Fetch the current cart from the server
  const cartResponse = await fetch("http://localhost:3001/cart");
  const currentCart = await cartResponse.json();

  // Check if an item with the given itemId already exists in the cart
  const existingItem = currentCart.find((item) => item.id === newItem.id);

  // If the item exists, increment its count by 1
  if (existingItem) {
    existingItem.count += 1;
  } else {
    // If the item doesn't exist, create a new item with count 1 and details from the products
    const formattedItem = {
      img: newItem.img,
      name: newItem.name,
      category: newItem.category,
      price: newItem.price,
      isNew: newItem.isNew,
      id: newItem.id,
      count: 1,
    };

    // Add the new item to the cart
    currentCart.push(formattedItem);
  }

  // Update the cart on the server
  await fetch("http://localhost:3001/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentCart),
  });
}

export async function deleteItem(id) {
  // Fetch the current cart from the server
  const cartResponse = await fetch("http://localhost:3001/cart");
  let currentCart = await cartResponse.json();

  // Find the index of the item with the given id in the cart
  const itemIndex = currentCart.findIndex((item) => item.id === id);

  // If the item exists, remove it from the cart
  if (itemIndex !== -1) {
    currentCart.splice(itemIndex, 1);

    // Update the cart on the server
    await fetch("http://localhost:3001/cart", {
      method: "PUT", // Assuming your API supports updating the entire cart
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentCart),
    });
  }
}
