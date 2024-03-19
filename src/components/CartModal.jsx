import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Modal from "./Modal";
import CartList from "../featurs/cart/cartList";
import { useLocation } from "react-router-dom";
import { useScrolled } from "../context/ScrolledContext";

import { useCartContext } from "../context/CartContext";
function CartModal() {
  // const { cart, isLoading, cartCountItems } = useFetchCart();
  const { cartCountItems } = useCartContext();
  const { isScrolled } = useScrolled();
  const isHomePagePath = useLocation().pathname === "/home";

  return (
    <div>
      <Modal>
        <Modal.Open opens="cart">
          <StyledCartIcon>
            {isHomePagePath ? (
              <CartText isscrolled={isScrolled}>Cart</CartText>
            ) : (
              <CartTextBlack isscrolled={isScrolled}>Cart</CartTextBlack>
            )}

            <HiOutlineShoppingBag
              size={22}
              color={isScrolled || !isHomePagePath ? "" : "var(--color-grey-0)"}
            />

            <Counter isScrolled={isScrolled}>
              <P>{cartCountItems}</P>
            </Counter>

            {/* {isLoading && <SpinnerMini>Loading...</SpinnerMini>} */}
          </StyledCartIcon>
        </Modal.Open>

        <Modal.Window name="cart">
          <CartList />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CartModal;

const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Counter = styled.div`
  border-radius: 5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 11px;
  margin-left: 0px;
  margin-bottom: 20px;
  background-color: var(--color-grey-800);
  width: 19px;
  height: 19px;
`;

const P = styled.p`
  color: ${(props) =>
    props.isscrolled ? "var(--color-grey-700)" : "var(--color-grey-0)"};
  font-size: 11px;
  font-weight: bold;
`;

const CartText = styled.p`
  color: ${(props) =>
    props.isscrolled || props.ishomepage ? "" : "var(--color-grey-0)"};
  padding-right: 0.6rem;
  font-size: 13px;
`;

const CartTextBlack = styled.p`
  color: var(--color-grey-700);
  padding-right: 0.6rem;
  font-size: 13px;
`;

const LoadingText = styled.p`
  color: var(--color-grey-700);
  font-size: 13px;
  padding-left: 0.6rem;
`;
