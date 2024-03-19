// useProducts.js
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  return { product, isLoading, error };
};

export default useProduct;
