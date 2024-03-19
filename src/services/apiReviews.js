import supabase from "./supabase";

export async function fetchReviews() {
  const { data, error } = await supabase.from("reviews").select("*");
  if (error) {
    console.error(error);
    throw new Error("Reviews could not be loaded");
  }
  return data;
}

export async function insertReview(newReview) {
  const { data, error } = await supabase.from("reviews").insert(newReview);
  if (error) {
    console.error(error);
    throw new Error("likes could not be loaded");
  }
  console.log(data);
  return data;
}
