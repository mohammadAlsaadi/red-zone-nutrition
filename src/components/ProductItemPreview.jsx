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
        <img src={item.image} width={65} height={65} alt="productSummary" />
        <InfoContainer>
          <Heading as="h6">{t(item.name)}</Heading>
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
          <Heading as="h6">{t(item.flavor)}</Heading>
        </StyledFlavor>
        <Heading as="h4">{formatPrice(item.price * item.count)}</Heading>
        <Heading as="h6">
          {formatPrice(item.price)} x {item.count}
        </Heading>
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
  }
  background-color: var(--color-gold-100);
  padding: 1rem 3rem;
`;
const CartItemSummary = styled.div`
  display: flex;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.6rem;
  padding-right: 0.8rem;
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
