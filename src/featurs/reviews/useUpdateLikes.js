import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateLikes as updateLikesApi } from "../../services/apiReviews";

export function useUpdateLikes() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateLikes } = useMutation({
    mutationFn: ({ id, newLikes }) => updateLikesApi(id, newLikes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      console.log("new likes done");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateLikes };
}
