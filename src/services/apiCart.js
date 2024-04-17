import supabase from "./supabase";

export async function fetchCart() {
  const { data, error } = await supabase.from("cart").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cart could not be loaded");
  }
  return data;
}

export async function insertNewProduct(newProduct) {
  const { data, error } = await supabase
    .from("cart")
    .insert(newProduct)
    .select();
  if (error) {
    console.error(error);
    throw new Error("New product could not be loaded");
  }
  return data;
}

export async function IncrementItemCart(productId) {
  let { data: cartProductCount, error: fetchingError } = await supabase
    .from("cart")
    .select("*");
  if (fetchingError) {
    console.error(fetchingError);
    throw new Error("Error fetching current productCount value");
  }
  const productCurrentCount = cartProductCount.filter(
    (item) => item.productId === productId
  )[0].productCount;
  let newCount = productCurrentCount + 1;
  const { data, error } = await supabase
    .from("cart")
    .update({ productCount: newCount })
    .eq("productId", productId)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Error updating current productCount value");
  }
  return data;
}

export async function DecrementItemCart(productId) {
  let { data: cartProductCount, error: fetchingError } = await supabase
    .from("cart")
    .select("*");
  if (fetchingError) {
    console.error(fetchingError);
    throw new Error("Error fetching current productCount value");
  }
  const productCurrentCount = cartProductCount.filter(
    (item) => item.productId === productId
  )[0].productCount;
  let newCount =
    productCurrentCount > 1 ? productCurrentCount - 1 : productCurrentCount;
  if (productCurrentCount === 1) return null;
  const { data, error } = await supabase
    .from("cart")
    .update({ productCount: newCount })
    .eq("productId", productId)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Error updating current productCount value");
  }
  return data;
}

export async function removeItem(itemId) {
  try {
    const { error } = await supabase.from("cart").delete().eq("id", itemId);

    if (error) {
      console.error(error);
      throw new Error(`Error deleting item with productId ${itemId}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error deleting item with productId ${itemId}`);
  }
}

export async function removeAllItems() {
  try {
    // Fetch all items from the "cart" table
    const { data: cartItems, error } = await supabase.from("cart").select("id");

    if (error) {
      console.error(error.message);
      throw new Error(`Error fetching cart items`);
    }

    // Delete each item one by one
    for (const item of cartItems) {
      const { error: deleteError } = await supabase
        .from("cart")
        .delete()
        .eq("id", item.id);

      if (deleteError) {
        console.error(deleteError.message);
        throw new Error(`Error deleting item with ID ${item.id}`);
      }
    }
  } catch (error) {
    console.error(error.message);
    throw new Error(`Error removing all items from cart`);
  }
}
