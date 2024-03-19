import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewOrder } from "../../services/apiOrder";
import toast from "react-hot-toast";

export default function useCreateOrder() {
  const queryClient = useQueryClient();
  const {
    mutate: createOrder,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (newOrder) => createNewOrder(newOrder),
    onSuccess: () => {
      queryClient.invalidateQueries("order");
      toast.success("order submited,check your order on my order page");
    },
    onError: () => console.log(error.message),
  });
  return { createOrder, isLoading };
}
