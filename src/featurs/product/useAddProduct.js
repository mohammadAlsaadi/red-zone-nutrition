import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as apiAddProduct } from "../services/apiProducts";

const useAddProduct = () => {
  const queryClient = useQueryClient();

  const {
    mutate: addProducct,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (newProduct) => apiAddProduct(newProduct),
    onSuccess: () => {
      // Invalidate and refetch the products query to update the list after adding a new product
      queryClient.invalidateQueries("products");
    },
    onError: () => console.log("Error when add new product"),
  });

  return {
    addProducct,
    isLoading,
    error,
  };
};

export default useAddProduct;
