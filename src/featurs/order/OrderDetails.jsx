import React, { useState } from "react";
import styled from "styled-components";
import ProductItemPreview from "../../components/productItemPreview";
import Spinner from "../../components/Spinner";
import Heading from "../../components/Heading";
import Stepper from "../../components/Stepper";
import SpinnerMini from "../../components/SpinnerMini";
import { formatPrice, getStatusColor } from "../../utils/helper";
import { HiOutlineChevronDown, HiXMark } from "react-icons/hi2";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import { useTranslation } from "react-i18next";
import useDeleteOrder from "./useDeleteOrder";

const STATUS = ["Order Received", "Processing", "Shipped", "Completed"];

const OrderDetails = ({ order, isLoading }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const { t } = useTranslation();
  const { deleteOrder, isLoading: isDeleting } = useDeleteOrder();

  if (isLoading || isDeleting) return <Spinner />;

  const {
    id,
    totalPrice,
    status,
    estimatedDelivery,
    items,
    location,
    userId,
    payment_method,
    has_discount,
  } = order;
  const colorOfStatus = getStatusColor(status);
  // const discount = has_discount ? 0.15 * productsPrice : 0;
  // const totalPrice = productsPrice - discount + 3;

  const toggleDetails = () => {
    setIsOpenDetails((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Container>
      <DetailsSection>
        <StyledDetailsHeader>
          <Heading as="h2">
            {t("Order #")} {id}
          </Heading>
          <DetailItem>
            {!isOpenDetails && (
              <Heading as="h4" color={colorOfStatus}>
                {t(status)}
              </Heading>
            )}
            {isOpenDetails ? (
              <HiXMark cursor="pointer" size={23} onClick={toggleDetails} />
            ) : (
              <HiOutlineChevronDown
                cursor="pointer"
                size={23}
                onClick={toggleDetails}
              />
            )}
          </DetailItem>
        </StyledDetailsHeader>
        {isOpenDetails && (
          <>
            <StepsWrapper>
              <Stepper steps={STATUS} currentStep={1} status={status} />
            </StepsWrapper>
            <DetailItem>
              <Label>{t("Total Price:")}</Label>
              <Value>{formatPrice(totalPrice)}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{t("Estimated Delivery:")}</Label>
              <Value>{estimatedDelivery}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{t("Location")}:</Label>
              <Value>{location}</Value>
            </DetailItem>
            <DetailItem>
              <Label>{t("Payment")}</Label>
              <Value>
                {payment_method === "cash"
                  ? t("Cash")
                  : t("The payment was made")}
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>{t("Items")}</Label>
              <ItemList>
                {items?.map((item) => (
                  <ProductItemPreview
                    item={item}
                    key={item.id}
                    withoutDetails={true}
                  />
                ))}
              </ItemList>
            </DetailItem>

            {payment_method === "cash" && (
              <StyledCancelOrder>
                <Modal>
                  <Modal.Open opens="cancel order">
                    <Button variation="danger">{t("Cancel order")}</Button>
                  </Modal.Open>
                  <Modal.Window name="cancel order">
                    <ConfirmDelete
                      resourceName="order"
                      onConfirm={() => deleteOrder(id)}
                    />
                  </Modal.Window>
                </Modal>
              </StyledCancelOrder>
            )}
          </>
        )}
      </DetailsSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const DetailsSection = styled.div`
  background-color: var(--color-grey-0);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.div`
  flex-grow: 1;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
`;

const StyledDetailsHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledCancelOrder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export default OrderDetails;
