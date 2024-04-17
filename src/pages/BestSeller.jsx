import Spinner from "../components/Spinner";
import useOrders from "../featurs/order/useOrders";
import useProducts from "../featurs/product/useProducts";
import ListOfProducts from "../components/ListOfProducts";

function BestSeller() {
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const { data: products, isLoading: productsLoading } = useProducts();

  if (ordersLoading || productsLoading) return <Spinner />;

  // Flatten the array of order items to get an array of all product IDs
  const allProductIds = orders.flatMap((order) =>
    order.items.map((item) => item.productId)
  );

  // Count the occurrences of each product ID
  const orderCounts = allProductIds.reduce((counts, productId) => {
    counts[productId] = (counts[productId] || 0) + 1;
    return counts;
  }, {});

  // Find product IDs that repeat more than 5 times
  const bestSellerIds = Object.keys(orderCounts).filter(
    (productId) => orderCounts[productId] > 3
  );
  console.log(bestSellerIds);
  // Filter products based on best seller IDs
  const bestSellers = products.filter((product) =>
    bestSellerIds.includes(String(product.id))
  );

  console.log(bestSellers, bestSellerIds);

  return (
    <ListOfProducts
      data={bestSellers}
      isLoading={false}
      headerName="Best Seller"
    />
  );
}

export default BestSeller;
