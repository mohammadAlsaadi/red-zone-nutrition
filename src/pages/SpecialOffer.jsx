import { useTranslation } from "react-i18next";
import ListOfProducts from "../components/ListOfProducts";
import Spinner from "../components/Spinner";
import useProducts from "../featurs/product/useProducts";

function SpecialOffer() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <Spinner />;
  const products = data?.filter((product) => product.hasOffer === true);
  return (
    <>
      <ListOfProducts
        data={products}
        isLoading={isLoading}
        headerName="Special Offers"
      />
    </>
  );
}

export default SpecialOffer;
