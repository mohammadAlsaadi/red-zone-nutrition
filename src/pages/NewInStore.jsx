import ListOfProducts from "../components/ListOfProducts";
import Spinner from "../components/Spinner";
import useProducts from "../featurs/product/useProducts";

function NewInStore() {
  const { data, isLoading } = useProducts();
  if (isLoading) return <Spinner />;
  const newInStoreItems = data.filter((item) => item.isNew === true);
  return (
    <>
      <ListOfProducts
        data={newInStoreItems}
        headerName="New Products in store"
        itemsNumbersPerPage={6}
        isLoading={isLoading}
      />
    </>
  );
}

export default NewInStore;
