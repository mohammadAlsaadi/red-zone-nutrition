import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewItem } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useAddItemToCart() {
  const queryClient = useQueryClient();
  const {
    mutate: addItem,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (newItem) => addNewItem(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast.success("item added!");
    },
    onError: () => console.log(error.message),
  });
  return { addItem, isLoading };
}
