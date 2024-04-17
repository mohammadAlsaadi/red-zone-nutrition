import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/apiProducts";

const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading, error };
};

export default useProducts;
