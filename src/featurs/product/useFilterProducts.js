import { useMutation, useQueryClient } from "@tanstack/react-query";
import { filterProducts } from "../../services/apiProducts";

export default function useFilterProductsPrice() {
  const queryClient = useQueryClient();
  const {
    mutate: filterPrice,
    error,
    isLoading,
  } = useMutation({
    mutationFn: ({ from, to }) => filterProducts(from, to),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
    onError: () => console.log(error.message),
  });
  return { filterPrice, isLoading };
}
