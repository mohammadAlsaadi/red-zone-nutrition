import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder as deleteOrderApi } from "../../services/apiOrder";
import toast from "react-hot-toast";

export default function useDeleteOrder() {
  const queryClient = useQueryClient();
  const { mutate: deleteOrder, isLoading } = useMutation({
    mutationFn: (orderId) => deleteOrderApi(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries("order");
      toast.success("order was removed successfully!");
    },
  });

  return { deleteOrder, isLoading };
}
