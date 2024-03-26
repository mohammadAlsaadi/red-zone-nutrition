import styled from "styled-components";
import Button from "./Button";
import { formatCurrency } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import HasOffer from "./HasOffer";
import { useTranslation } from "react-i18next";
function ProductCard({ product }) {
  const { name, image, category, price, isNew, id, hasOffer, newPrice } =
    product;
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleBuyNow = (e) => {
    // e.stopPropagation();
    navigate(`/details/${id}`);
  };
  return (
    <StyledProductCart>
      {isNew && !hasOffer && (
        <Banner src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/new.svg" />
      )}
      {hasOffer && !isNew && (
        <Banner
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/discount1.png"
          width={40}
          height={40}
        />
      )}
      {hasOffer && isNew && (
        <Banner src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/new.svg" />
      )}
      <StyledImage src={image}></StyledImage>
      <ProductInfo>
        <ProductName>{t(name)}</ProductName>
        <ProductCategory>{t(category)}</ProductCategory>
        {hasOffer ? (
          <OldNewPrice>
            <HasOffer>{formatCurrency(price[0])}</HasOffer>
            <ProductPrice>
              {t("From")} {formatCurrency(newPrice[0])}
            </ProductPrice>
          </OldNewPrice>
        ) : (
          <ProductPrice>
            {t("From")} {formatCurrency(price[0])}
          </ProductPrice>
        )}{" "}
      </ProductInfo>
      <CardOption>
        <Button variations="primary" size="small" onClick={handleBuyNow}>
          {t("Buy now")}
        </Button>
      </CardOption>
    </StyledProductCart>
  );
}

export default ProductCard;
const StyledProductCart = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-300);
  border-radius: 1rem;
  padding: 3rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;

  &:hover {
    transform: scale(1.1);
    /* height: 370px; */
  }
  @media (min-width: 800px) {
    width: 200px;
    height: 320px;
    /* &:hover {
      height: 300px;
    } */
  }
  @media (min-width: 1000px) {
    width: 300px;
    height: 400px;
    /* &:hover {
      height: 700px;
    } */
  }
  @media (max-width: 800px) {
    width: 160px;
    height: 290px;
    /* &:hover {
      height: 280px;
    } */
  }
`;

const ProductName = styled.span`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;
const ProductCategory = styled.span`
  font-weight: lighter;
  font-size: 10px;
  color: var(--color-grey-600);
`;
const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 15px;
  color: var(--color-gold-700);
  padding: 5px 0px;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

const OldNewPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  /* gap: 0.5rem; */
`;
const StyledImage = styled.img`
  width: 80%;
  /* height: 30%; */
  border-radius: 0.5rem;
  border: none;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const CardOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
