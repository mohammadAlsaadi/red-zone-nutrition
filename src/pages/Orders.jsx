import styled, { keyframes } from "styled-components";
import OrderDetails from "../featurs/order/OrderDetails";
import Heading from "../components/Heading";
import { useUser } from "../featurs/authentication/useUser";
import Spinner from "../components/Spinner";
import useOrders from "../featurs/order/useOrders";
import { useTranslation } from "react-i18next";

function Orders() {
  const { data, isLoading } = useOrders();
  const { t } = useTranslation();
  const { user, isLoading: isFetchingUserId } = useUser();
  if (isFetchingUserId || isLoading) return <Spinner />;
  const userId = user?.id;
  const orders = data.filter((order) => order.userId === userId);

  return (
    <OrdersLayout>
      {orders ? (
        <>
          <Heading as="h2">{t("Orders History")}</Heading>
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
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const OrdersLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  margin: 3rem 0rem;
  animation: ${fadeIn} 1s ease-out;
`;
