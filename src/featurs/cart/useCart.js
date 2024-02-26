import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "../../services/apiCart";

export default function useCart() {
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  return { cart, isLoading };
}
