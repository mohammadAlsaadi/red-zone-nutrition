import React, { useState } from "react";
import styled from "styled-components";
import ProductItemPreview from "../../components/productItemPreview";
import Spinner from "../../components/Spinner";
import Heading from "../../components/Heading";
import Stepper from "../../components/Stepper";
import { formatPrice, getStatusColor } from "../../utils/helper";
import { HiOutlineChevronDown, HiXMark } from "react-icons/hi2";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
const STATUS = ["Order Received", "Processing", "Shipped", "Completed"];
const OrderDetails = ({ order, isLoading }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  if (isLoading) return <Spinner />;
  const { id, totalPrice, status, estimatedDelivery, items, location, userId } =
    order;
  const colorOfStatus = getStatusColor(status);
  return (
    <Container>
      <DetailsSection>
        <StyledDetailsHeader>
          <Heading as="h2">Order # {id}</Heading>
          <DetailItem>
            {!isOpenDetails && (
              <Heading as="h4" color={colorOfStatus}>
                {status}
              </Heading>
            )}
            {isOpenDetails ? (
              <HiXMark
                cursor="pointer"
                size={23}
                onClick={() => setIsOpenDetails(false)}
              />
            ) : (
              <HiOutlineChevronDown
                cursor="pointer"
                size={23}
                onClick={() => setIsOpenDetails(true)}
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
              <Label>Total Price:</Label>
              <Value>{formatPrice(totalPrice)}</Value>
            </DetailItem>

            <DetailItem>
              <Label>Estimated Delivery:</Label>
              <Value>{estimatedDelivery}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Location:</Label>
              <Value>{location}</Value>
            </DetailItem>
            {/* <DetailItem>
          <Label>User ID:</Label>
          <Value>{userId}</Value>
        </DetailItem> */}
            <DetailItem>
              <Label>Items</Label>
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
            <StyledCancelOrder>
              <Modal>
                <Modal.Open opens="cancel order">
                  <Button variation="danger">Cancel order</Button>
                </Modal.Open>
                <Modal.Window name="cancel order">
                  <ConfirmDelete resourceName="order" />
                </Modal.Window>
              </Modal>
            </StyledCancelOrder>
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
  background-color: #fff;
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
