import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCartContext } from "../context/CartContext";
import Modal from "./Modal";
import CartList from "../featurs/cart/cartList";
import { useLocation } from "react-router-dom";

function CartIcon() {
  const { cartCountItems } = useCartContext();
  const isCartPath = useLocation().pathname === "/cart";

  return (
    <StyledCartIcon>
      <div>
        <Modal>
          <Modal.Open opens="cart">
            <ButtonIcon disabled={isCartPath}>
              <HiOutlineShoppingCart color="red" />
            </ButtonIcon>
          </Modal.Open>

          <Modal.Window name="cart">
            <div>
              <CartList />
            </div>
          </Modal.Window>
        </Modal>
      </div>
      <Counter>
        <P>{cartCountItems}</P>
      </Counter>
    </StyledCartIcon>
  );
}

export default CartIcon;
const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
`;
const Counter = styled.div`
  border-radius: 5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0px;
  margin-bottom: 20px;
  background-color: red;
  width: 18px;
  height: 18px;
`;
const P = styled.p`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
