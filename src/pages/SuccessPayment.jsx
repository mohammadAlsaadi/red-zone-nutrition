import { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAddressContext } from "../context/AddressContext";
import { useUser } from "../featurs/authentication/useUser";
import Spinner from "../components/Spinner";
import { useCartContext } from "../context/CartContext";
import useCreateOrder from "../featurs/order/useCreateOrder";
import { useTranslation } from "react-i18next";

function SuccessPayment() {
  const { addressAutoFill, street, buildingNumber } = useAddressContext();
  const { user, isAuthenticated, isLoading } = useUser();
  const [orderProcessed, setOrderProcessed] = useState(false);
  const { t } = useTranslation();
  const {
    cart,
    isLoading: isFetchingCartData,
    totalPrice: itemsPrice,
    clearCart,
  } = useCartContext();
  const { createOrder, isLoading: isCreating } = useCreateOrder();
  const has_discount = window.localStorage.getItem("has_discount");

  const navigate = useNavigate();
  const discount = has_discount ? 0.15 * itemsPrice : 0;
  const shipping = itemsPrice < 70.0 ? 3.0 : 0;

  const totalPrice = itemsPrice - discount + shipping;
  useEffect(() => {
    if (
      orderProcessed &&
      !isLoading &&
      !isFetchingCartData &&
      cart.length !== 0 &&
      isAuthenticated &&
      !isCreating
    ) {
      const newOrder = {
        totalPrice: totalPrice,
        status: "Order Received",
        estimatedDelivery: "24h-48h",
        items: cart,
        location:
          addressAutoFill + "-" + street + "/building number:" + buildingNumber,
        userId: user?.id,
        payment_method: "creditCard",
        has_discount: has_discount,
      };
      createOrder(newOrder);
      clearCart();
      window.localStorage.setItem("has_discount", false);
    }
  }, [
    cart,
    isAuthenticated,
    isCreating,
    isLoading,
    isFetchingCartData,
    addressAutoFill,
    street,
    buildingNumber,
    clearCart,
    createOrder,
    totalPrice,
    user,
    orderProcessed,
    has_discount,
  ]);

  if (isLoading || isFetchingCartData || isCreating) return <Spinner />;

  if (!orderProcessed) {
    setOrderProcessed(true);
  }

  return (
    <Container>
      <StyledSuccessPayment>
        <StyledHeader>
          <Heading as="h3">{t("Payment Submitted Successfully")} </Heading>
          <img
            src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/checkIcon.png"
            alt="checkIcon"
            width={40}
            height={40}
          />
        </StyledHeader>

        <Paragraph>{t("Thank you for choosing us!")}</Paragraph>
        <Paragraph>
          {t("Your order has been processed successfully.")}
        </Paragraph>
        <StyledButtons>
          <Button
            size="tallerHerzontally"
            variation="primary"
            onClick={() => navigate("/orders")}
          >
            {t("See orders")}
          </Button>
          <Button
            size="tallerHerzontally"
            variation="secondary"
            onClick={() => navigate("/home")}
          >
            {t("Back to home")}
          </Button>
        </StyledButtons>
      </StyledSuccessPayment>
    </Container>
  );
}

export default SuccessPayment;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  padding: 10rem;
`;

const StyledSuccessPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 90%;
  height: 60%;
  padding: 3rem 7rem;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-300);
  border-radius: 16px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-grey-600);
  margin-top: 1rem;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  width: 60%;
  height: 200px;
  @media (max-width: 850px) {
    width: 100%;
    height: 150px;
  }
`;
