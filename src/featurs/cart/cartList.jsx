import React from "react";
import styled from "styled-components";
// import useCart from "./useCart";
import Modal from "../../components/Modal";
import CartItem from "../../components/CartItem";
import Heading from "../../components/Heading";
import { formatCurrency } from "../../utils/helper";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { useCartContext } from "../../context/CartContext";
import ConfirmDelete from "../../components/ConfirmDelete";

function CartList({ onCloseModal }) {
  const { cart, clearCart, totalPrice } = useCartContext();

  const navigate = useNavigate();
  const isCartPage = useLocation().pathname === "/cart";

  function handleclick(path) {
    // e.preventDefault();

    onCloseModal();
    navigate(path);
  }
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <StyledList>
          {isCartPage && (
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
          )}
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
              <ButtonText
                onClick={() => handleclick("/products/all")}
                color="white"
                textDecoration="underLine"
              >
                Order more
              </ButtonText>
              <Button
                onClick={() => handleclick("checkout")}
                variation="transparent"
                border="circle"
              >
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
  padding: 0rem 2rem;
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
