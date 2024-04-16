import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewOrder } from "../../services/apiOrder";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

export default function useCreateOrder() {
  const pathName = useLocation().pathname === "/success-payment";
  const queryClient = useQueryClient();
  const {
    mutate: createOrder,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (newOrder) => createNewOrder(newOrder),
    onSuccess: () => {
      queryClient.invalidateQueries("order");
      !pathName &&
        toast.success("order submited,check your order on my order page");
    },
    onError: () => console.log(error.message),
  });
  return { createOrder, isLoading };
}
