import styled, { keyframes } from "styled-components";
import CartList from "../featurs/cart/cartList";
function Cart() {
  return (
    <StyledCart>
      <CartList />
    </StyledCart>
  );
}

export default Cart;
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
const StyledCart = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 5rem;
  animation: ${fadeIn} 1s ease-out;
`;
