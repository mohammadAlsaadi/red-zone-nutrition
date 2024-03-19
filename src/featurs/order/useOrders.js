import { useQuery } from "@tanstack/react-query";
import { fetchAllOrders } from "../../services/apiOrder";

export default function useOrders() {
  const { data, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: fetchAllOrders,
  });

  return { data, isLoading };
}
