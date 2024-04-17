import styled, { keyframes } from "styled-components";
import NotAuthenticatedUser from "../components/NotAuthenticatedUser";
import UserInfo from "../components/UserInfo";
import AddressesForm from "../components/AddressesForm ";
import { useEffect, useState } from "react";
import { useUser } from "../featurs/authentication/useUser";
import Heading from "../components/Heading";
import Spinner from "../components/Spinner";
import Form from "../components/Form";
import { useCartContext } from "../context/CartContext";
import useCreateOrder from "../featurs/order/useCreateOrder";
import { formatPrice } from "../utils/helper";
import ProductItemPreview from "../components/productItemPreview";
import {
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiXMark,
} from "react-icons/hi2";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useAddressContext } from "../context/AddressContext";
import Input from "../components/Input";

function Checkout() {
  const {
    cart,
    isLoading: isFetchingCartData,
    cartCountItems,
    totalPrice: productsPrice,
    clearCart,
  } = useCartContext();
  const [isOpenSummaryItems, setIsOpenSummaryItems] = useState(false);
  const [coupon, setCoupon] = useState("");
  const { addressAutoFill, street, buildingNumber } = useAddressContext();
  const { user, isAuthenticated, isLoading } = useUser();
  const { createOrder, isLoading: isCreating } = useCreateOrder();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const isCouponValid = coupon === "FRESHMUSCLES";
  const shipping = productsPrice < 70.0 ? 3.0 : 0;
  const discount = isCouponValid ? 0.15 * productsPrice : 0;
  const totalPrice = shipping + productsPrice - discount;
  const has_discount = window.localStorage.getItem("has_discount");
  useEffect(() => {
    if (isCouponValid) window.localStorage.setItem("has_discount", true);
    else {
      window.localStorage.setItem("has_discount", false);
    }
  }, [isCouponValid]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  const handleComplete = async (e) => {
    e.preventDefault();

    // Step 1 : Check if address information has not been entered
    if (addressAutoFill === undefined || !street || !buildingNumber) {
      toast.error(t("Please fill all address field."));
    }
    // Step 2 : Check payment method chosen
    // 2.1 : Credit Card Method
    else if (paymentMethod === "creditCard") {
      try {
        const response = await fetch(
          "http://localhost:3000/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              items: cart,
              discount,
            }),
          }
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }
        const { url } = await response.json();
        window.location.href = url;
      } catch (error) {
        console.error(error);
      }
    }
    // 2.1 : cash Method
    else if (paymentMethod === "cash") {
      const totalPriceAfterChange = productsPrice - discount + shipping;
      const newOrder = {
        totalPrice: totalPriceAfterChange,
        status: "Order Received",
        estimatedDelivery: "24h-48h",
        items: cart,
        location:
          addressAutoFill.formatted_address +
          "-" +
          street +
          "/building number:" +
          buildingNumber,
        userId: user.id,
        payment_method: "cash",
        has_discount,
      };
      createOrder(newOrder);
      clearCart();
    }
  };

  if (isLoading || isFetchingCartData) return <Spinner />;
  if (cart.length === 0) return navigate("/home");
  return (
    <CheckoutLayout>
      {!isAuthenticated && <NotAuthenticatedUser />}
      {isAuthenticated && (
        <ISAuthCheck>
          <img
            src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/checkIcon.png"
            alt="checkIcon"
            width={50}
            height={50}
          />
          <Heading as="h4">{t("Email Submitted")} </Heading>
        </ISAuthCheck>
      )}

      {isAuthenticated && <UserInfo />}
      <BoxContainer>
        <AddressesForm apiKey="AIzaSyAkz2EGQi_c6xwbpzpUglGfLZEJ740lz-Q" />{" "}
      </BoxContainer>
      <BoxContainer>
        <Form>
          <PaymentMethodsContainer>
            <Heading as="h5">{t("Choose Payment Method")}</Heading>
            <RadioContainer>
              <MethodContainer
                onClick={() => handlePaymentMethodChange("creditCard")}
              >
                <RadioOption>
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => handlePaymentMethodChange("creditCard")}
                  />
                  <Heading as="h5">{t("Credit Card")}</Heading>
                </RadioOption>
                <img
                  src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/creditMethod.png"
                  alt="credit"
                  width={80}
                  height={25}
                />
              </MethodContainer>
              <MethodContainer
                onClick={() => handlePaymentMethodChange("cash")}
              >
                <RadioOption>
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => handlePaymentMethodChange("cash")}
                  />
                  <Heading as="h5">{t("Cash")}</Heading>
                </RadioOption>
                <img
                  src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/cashMethod.png"
                  alt="cash"
                  width={30}
                  height={25}
                />
              </MethodContainer>
            </RadioContainer>
          </PaymentMethodsContainer>
        </Form>
      </BoxContainer>
      <Form>
        <DiscountContainer>
          <Heading as="h5">{t("Save on your order")}</Heading>
          <DiscountInputContainer>
            <Input
              placeholder="Enter the coupon here"
              onChange={(e) => setCoupon(e.target.value)}
              disabled={isCouponValid}
            />
            <Button
              variation={isCouponValid ? "secondary" : "primary"}
              size="small"
              disabled={isCouponValid}
            >
              {isCouponValid ? (
                <HiOutlineCheckCircle size={22} color="green" />
              ) : (
                t("submit")
              )}
            </Button>
          </DiscountInputContainer>
          {isCouponValid && (
            <Heading color="green" as="h7">
              {t("you got 15% discount")}
            </Heading>
          )}
        </DiscountContainer>
      </Form>
      <Form>
        <OrderSummaryContainer>
          <StyledHeader>
            <Heading as="h5">
              {t("Oreder Summary")}({cartCountItems})
            </Heading>
            {isOpenSummaryItems ? (
              <HiXMark onClick={() => setIsOpenSummaryItems(false)} />
            ) : (
              <HiOutlineChevronDown
                onClick={() => setIsOpenSummaryItems(true)}
              />
            )}
          </StyledHeader>
          {isOpenSummaryItems && (
            <ItemsContainer>
              {cart?.map((item) => (
                <ProductItemPreview
                  item={item}
                  key={item.id}
                  withoutDetails={true}
                />
              ))}
            </ItemsContainer>
          )}
          <SummaryInfo>
            <LabelValue>
              <p as="h6">{t("Items count")}</p>
              <Heading as="h6">{cartCountItems}</Heading>
            </LabelValue>
            <LabelValue>
              <p as="h6">{t("Products Price")}</p>
              <Heading as="h6">{formatPrice(productsPrice)}</Heading>
            </LabelValue>
            <LabelValue>
              <p as="h6">{t("Shipping")}</p>
              <Heading color={totalPrice > 70.0 ? "green" : "red"} as="h6">
                {totalPrice > 70.0 ? t("FREE") : formatPrice(shipping)}
              </Heading>
            </LabelValue>
            <LabelValue>
              <p as="h6">{t("Tax")}</p>
              <Heading as="h6">--</Heading>
            </LabelValue>
            <LabelValue>
              <p as="h6">{t("Discount")}</p>
              <Heading as="h6" color={isCouponValid ? "green" : ""}>
                {isCouponValid ? formatPrice(discount) : "--"}
              </Heading>
            </LabelValue>
          </SummaryInfo>
          <LabelValue>
            <p as="h4">{t("Total Price")}</p>
            <Heading as="h5">{formatPrice(totalPrice)}</Heading>
          </LabelValue>
          <Button
            variation="primary"
            size="tallerHerzontally"
            onClick={(e) => handleComplete(e)}
          >
            {isCreating ? t("Loading") + " .." : t("Complete Order")}
          </Button>
        </OrderSummaryContainer>
      </Form>
    </CheckoutLayout>
  );
}

export default Checkout;
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
const CheckoutLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  animation: ${fadeIn} 1s ease-out;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ISAuthCheck = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem 2rem;
  @media (min-width: 1000px) {
    margin: 0rem 15rem;
  }
  @media (min-width: 1200px) {
    margin: 0rem 25rem;
  }
  @media (min-width: 600px) {
    margin: 0rem 5rem;
  }
  @media (max-width: 600px) {
    margin: 0rem 2rem;
  }

  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;
const PaymentMethodsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40rem;
  background-color: aliceblue;
  border: 1px solid var(--color-grey-200);
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;

  width: 100%;
  margin: 8px;
  gap: 1rem;

  padding-bottom: 1.2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
  input {
    margin-right: 8px;
  }
  label {
    font-size: 1rem;
  }
`;
const MethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
`;
const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 100%;
  gap: 1rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: 100%;
  gap: 1rem;
  border-bottom: 2px solid var(--color-grey-300);
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const DiscountContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0rem 5rem;
`;
const DiscountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  width: 100%;
`;
const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-300);
  padding-bottom: 1rem;
`;
const LabelValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 4rem;
`;
