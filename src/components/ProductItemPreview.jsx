import styled from "styled-components";
import Heading from "./Heading";
import ColorIcon from "./ColorIcon";
import { formatPrice } from "../utils/helper";
import { useTranslation } from "react-i18next";

function ProductItemPreview({ item }) {
  const { t } = useTranslation();

  return (
    <CartItemContainer>
      <CartItemSummary>
        <StyledImg src={item.image} />
        <InfoContainer>
          <StyledItemName>{t(item.name)}</StyledItemName>
          <Heading color="var(--color-grey-400)" as="h7">
            {t(item.category)}
          </Heading>
          <Heading color="var(--color-gold-700)" as="h7">
            {t(item.companyName)}
          </Heading>
        </InfoContainer>
      </CartItemSummary>
      <StyledFlavorPriceContainer>
        <StyledFlavor>
          <ColorIcon dataToConvert={item?.flavor} />
          <StyledFlavorText>{t(item.flavor)}</StyledFlavorText>
        </StyledFlavor>
        <StyledPrice as="h5">
          {formatPrice(item.price * item.count)}
        </StyledPrice>
        <StyledItemCount>
          {formatPrice(item.price)} x {item.count}
        </StyledItemCount>
      </StyledFlavorPriceContainer>
    </CartItemContainer>
  );
}

export default ProductItemPreview;
const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem 1rem;
  }
  background-color: var(--color-gold-100);
  padding: 1rem 3rem;
`;
const CartItemSummary = styled.div`
  display: flex;
`;
const StyledImg = styled.img`
  width: 65px;
  height: 65px;
  @media (max-width: 600px) {
    width: 55px;
    height: 55px;
  }
`;
const StyledItemName = styled.p`
  font-size: small;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: x-small;
  }
`;
const StyledFlavorText = styled.p`
  font-size: small;
  @media (max-width: 600px) {
    font-size: x-small;
  }
`;
const StyledPrice = styled.p`
  font-size: medium;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: small;
  }
`;
const StyledItemCount = styled.p`
  font-size: small;
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.6rem;
  padding-right: 0.8rem;
  @media (max-width: 600px) {
    padding: 0rem 0.4rem;
  }
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
