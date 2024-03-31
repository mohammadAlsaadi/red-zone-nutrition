// useCategories.js
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../../services/apiArticles";

export default function useFetchArticles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  return { data, isLoading, error };
}
