import styled from "styled-components";
import OrderDetails from "../featurs/order/OrderDetails";
import Heading from "../components/Heading";
import { useUser } from "../featurs/authentication/useUser";
import Spinner from "../components/Spinner";
import useOrders from "../featurs/order/useOrders";

function Orders() {
  const { data, isLoading } = useOrders();
  const { user, isLoading: isFetchingUserId } = useUser();
  if (isFetchingUserId || isLoading) return <Spinner />;
  const userId = user?.id;
  const orders = data.filter((order) => order.userId === userId);

  return (
    <OrdersLayout>
      {orders ? (
        <>
          <Heading as="h2">Orders History</Heading>
          {orders?.map((order) => (
            <OrderDetails order={order} key={order.id} isLoading={isLoading} />
          ))}
        </>
      ) : (
        <div>
          <Heading as="h3">You don't have orders yet !</Heading>
        </div>
      )}
    </OrdersLayout>
  );
}

export default Orders;
const OrdersLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  margin-bottom: 5rem;
`;
