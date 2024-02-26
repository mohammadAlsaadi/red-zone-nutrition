import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useDeleteItem() {
  const queryClient = useQueryClient();
  const { mutate: deletIem } = useMutation({
    mutationFn: (id) => deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast.success("item was removed!");
    },
  });

  return { deleteItem };
}
