import supabase from "./supabase";

export async function fetchArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.log("ERROR when fetch Articles:", error.message);
  }
  return data;
}

export async function fetchArticleById(articleId) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", articleId);
  if (error) {
    console.log("ERROR when fetch Article:", error.message);
  }
  return data;
}
