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
