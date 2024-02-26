import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

function EmptyCart() {
  const navigate = useNavigate();
  const isCartPath = useLocation().pathname === "/cart";
  return (
    <StyledEmpty>
      {!isCartPath && (
        <StyledHeader>
          <Heading as="h3">Shopping cart 🛒</Heading>
        </StyledHeader>
      )}

      <Heading as="h4">
        Your cart is still empty. Start adding some items 🙋‍♂️
      </Heading>
      {isCartPath && (
        <Button onClick={() => navigate("/products")}>Add Products</Button>
      )}
    </StyledEmpty>
  );
}

export default EmptyCart;
const StyledEmpty = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 700px) {
    width: 70%;
  }
  width: 50%;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--color-grey-600);
`;
