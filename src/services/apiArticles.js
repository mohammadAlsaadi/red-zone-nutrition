import supabase from "./supabase";

export async function fetchArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.log("ERROR when fetch Articles:", error.message);
  }
  return data;
}
