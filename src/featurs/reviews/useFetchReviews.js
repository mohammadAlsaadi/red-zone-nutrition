// useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../services/apiReviews";

const useFetchReviews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  return { data, isLoading, error };
};

export default useFetchReviews;
