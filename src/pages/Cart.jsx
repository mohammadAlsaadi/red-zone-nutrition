import styled from "styled-components";
import CartList from "../featurs/cart/cartList";
function Cart() {
  return (
    <StyledCart>
      <CartList />
    </StyledCart>
  );
}

export default Cart;
const StyledCart = styled.div`
  height: 100%;
  width: 100%;
`;
