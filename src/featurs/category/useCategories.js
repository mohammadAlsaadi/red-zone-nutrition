// useCategories.js
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/apiCategories";

export default function useCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return { data, isLoading, error };
}
