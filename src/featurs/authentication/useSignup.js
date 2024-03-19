import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useState } from "react";

export function useSignup() {
  const userToCheck = useUser();
  const path = useLocation().pathname;
  const isCheckoutPath = path === "/checkout";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: async (user) => {
      // Check if the email already exists
      const emailExists = userToCheck.find(
        (checkedUser) => checkedUser.email === user.email
      );
      // Check if the phone number already exists
      const phoneExists = userToCheck.find(
        (checkedUser) => checkedUser.phone === user.phone
      );
      if (emailExists) {
        toast.error("Email already exists");
      } else if (phoneExists) {
        toast.error("Phone number already exists");
      } else {
        // If neither email nor phone number exists, proceed with signup
        await signupApi(user);
      }
    },
    onSuccess: () => {
      toast.success("Sign up successful");
      if (isCheckoutPath) {
        navigate("/checkout");
      } else {
        navigate("/home");
      }
    },

    onError: () => toast.error("Email or phone number already exists!"),
  });

  return { signup, isLoading };
}
