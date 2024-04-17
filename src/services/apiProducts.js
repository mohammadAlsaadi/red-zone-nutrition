import supabase from "./supabase";

// apiProducts.js
export async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return data;
}

export async function getProduct(productId) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }
  return data;
}
export async function updateProductRating(newRating, productId) {
  const { data, error } = await supabase
    .from("products")
    .update({ productRating: newRating })
    .eq("id", productId)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Product rating could not be updated");
  }
  return data;
}

export async function filterProducts(priceFrom, priceTo) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .gte("price", priceFrom)
    .lte("price", priceTo);
  if (error) {
    console.error(error);
    throw new Error("Product  could not be fetched");
  }
  return data;
}
