import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (user) => signupApi(user),
    onSuccess: () => {
      toast.success(
        "Account successfully created! ,Please verufy the new account from the user's email address."
      );
      navigate("/login");
    },
    onError: (err) => toast.error(err),
  });

  return { signup, isLoading };
}
