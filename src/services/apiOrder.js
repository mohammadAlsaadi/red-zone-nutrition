import supabase from "./supabase";

export async function createNewOrder(newOrder) {
  const { data, error } = await supabase
    .from("order")
    .insert(newOrder)
    .select();
  if (error) {
    console.error(error);
    throw new Error("order could not be created!");
  }
  return data;
}
export async function fetchAllOrders() {
  const { data: order, error } = await supabase.from("order").select("*");

  if (error) {
    console.error(error);
    throw new Error("order could not be fetched!");
  }
  return order;
}

export async function deleteOrder(orderId) {
  const { error } = await supabase.from("order").delete().eq("id", orderId);

  if (error) {
    console.error(error);
    throw new Error("order could not be deleted!");
  }
}
