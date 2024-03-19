import styled from "styled-components";
import Heading from "./Heading";
import ColorIcon from "./ColorIcon";
import { formatPrice } from "../utils/helper";

function ProductItemPreview({ item, withoutDetails }) {
  return (
    <CartItemContainer>
      <CartItemSummary>
        <img src={item.image} width={65} height={65} alt="productSummary" />
        <InfoContainer>
          <Heading as="h6">{item.name}</Heading>
          <Heading color="var(--color-grey-400)" as="h7">
            {item.category}
          </Heading>
          <Heading color="var(--color-gold-700)" as="h7">
            {item.companyName}
          </Heading>
        </InfoContainer>
      </CartItemSummary>
      <StyledFlavorPriceContainer>
        <StyledFlavor>
          <ColorIcon dataToConvert={item?.flavor} />
          <Heading as="h6">{item.flavor}</Heading>
        </StyledFlavor>
        <Heading as="h4">{formatPrice(item.price)}</Heading>
      </StyledFlavorPriceContainer>
    </CartItemContainer>
  );
}

export default ProductItemPreview;
const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 40rem;
  border-bottom: 1px solid var(--color-grey-300);
  margin-bottom: 1rem;
`;
const CartItemSummary = styled.div`
  display: flex;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.6rem;
`;
const StyledFlavorPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledFlavor = styled.div`
  padding-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
