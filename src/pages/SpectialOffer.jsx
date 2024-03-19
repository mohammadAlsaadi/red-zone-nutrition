import ListOfProducts from "../components/ListOfProducts";
import Spinner from "../components/Spinner";
import useProducts from "../featurs/product/useProducts";

function SpectialOffer() {
  const { data, isLoading } = useProducts();
  if (isLoading) return <Spinner />;
  const products = data?.filter((product) => product.hasOffer === true);
  return (
    <>
      <ListOfProducts
        data={products}
        isLoading={isLoading}
        headerName="Spectial Offers"
      />
    </>
  );
}

export default SpectialOffer;
