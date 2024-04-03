import { useQuery } from "@tanstack/react-query";
import { fetchArticleById } from "../../services/apiArticles";

export default function useFetchArticle() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: (articleId) => fetchArticleById(articleId),
  });

  return { data, isLoading, error };
}
