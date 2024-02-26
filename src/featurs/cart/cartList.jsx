import React from "react";
import styled from "styled-components";
// import useCart from "./useCart";
import Modal from "../../components/Modal";
import CartItem from "../../components/CartItem";
import Heading from "../../components/Heading";
import { formatCurrency } from "../../utils/helper";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import { Link, useLocation } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { useCartContext } from "../../context/CartContext";
import ConfirmDelete from "../../components/ConfirmDelete";

function CartList() {
  console.log(useLocation().pathname);
  // const { cart, isLoading } = useCart();
  const { cart, clearCart } = useCartContext();
  // if (isLoading) return <Spinner />;
  const totalPrice = cart?.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <StyledList>
          <div>
            <Modal>
              <Modal.Open opens="delete">
                <ButtonText color="red">Clear cart</ButtonText>
              </Modal.Open>

              <Modal.Window name="delete">
                <ConfirmDelete resourceName="cart" onConfirm={clearCart} />
              </Modal.Window>
            </Modal>
          </div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <StyledFooterBar>
            <StyledTotalPrice>
              <Heading as="h4" color="var(--color-grey-50)">
                Total Price :
              </Heading>
              <P>{formatCurrency(totalPrice)}</P>
            </StyledTotalPrice>
            <StyledOptions>
              <ButtonText color="white" textDecoration="underLine">
                <Link to="/products">Order more</Link>
              </ButtonText>
              <Button variation="secondary" border="circle">
                Check out
              </Button>
            </StyledOptions>
          </StyledFooterBar>
        </StyledList>
      )}
    </>
  );
}

export default CartList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  margin-bottom: 2rem;
  height: 100%;
`;
const StyledFooterBar = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: var(--color-grey-700);
`;
const StyledTotalPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0px 20px;
`;
const P = styled.p`
  color: var(--color-red-500);
`;
const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 10px;
`;
