import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertReview as insertReviewApi } from "../../services/apiReviews";

export function useInsertReview() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: insertReview } = useMutation({
    mutationFn: (newReview) => insertReviewApi(newReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast.success("The comment was added");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, insertReview };
}
