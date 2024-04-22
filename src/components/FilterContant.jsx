import styled from "styled-components";
import Heading from "./Heading";
import SwitchButton from "./SwitchButton";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useState } from "react";

function FilterContant({
  stock,
  setPriceFrom,
  setPriceTo,
  setStock,
  onCloseModal,
  priceFrom,
  priceTo,
}) {
  const { t } = useTranslation();
  const [stockValue, setStockValue] = useState(stock);
  const [fromValue, setFromValue] = useState(priceFrom);
  const [toValue, setToValue] = useState(priceTo);
  const placeHolderValue1 = 35;
  const placeHolderValue2 = 70;
  console.log(stock);
  const handleFilter = (e) => {
    if (toValue < 0 || fromValue < 0) return onCloseModal();
    else if (toValue < fromValue) {
      setStock(stockValue);
      setPriceFrom(fromValue);
      setPriceTo(fromValue * 2);
    } else {
      setStock(stockValue);

      setPriceFrom(fromValue);
      setPriceTo(toValue);
    }
    setStock(stockValue);

    setPriceFrom(fromValue);
    setPriceTo(toValue);
    onCloseModal();
  };
  return (
    <StyledFilter>
      <Heading as="h3">{t("Filter by")}</Heading>
      <OptionContainer>
        <Label>{t("Price")}</Label>
        <OptionContant>
          <InputContainer>
            <P>{t("From")}</P>
            <StyledInput
              placeholder={placeHolderValue1}
              type="number"
              onChange={(e) => setFromValue(e.target.value)}
            />
            <P>{t("JOD")}</P>
          </InputContainer>
          <InputContainer>
            <P>{t("to")}</P>
            <StyledInput
              placeholder={placeHolderValue2}
              type="number"
              onChange={(e) => setToValue(e.target.value)}
            />
            <P>{t("JOD")}</P>
          </InputContainer>
        </OptionContant>
      </OptionContainer>
      <OptionContainer>
        <Label>{t("Stock")}</Label>
        <OptionContant>
          <SwitchButton
            labels={["All", "In Stock", "Out of stock"]}
            width="190px"
            height="40px"
            setStock={setStockValue}
            stock={stockValue}
          />
        </OptionContant>
      </OptionContainer>
      <StyledButtons>
        <Button onClick={onCloseModal} variation="secondary">
          {t("Cancel")}
        </Button>
        <Button onClick={handleFilter}>{t("Done")}</Button>
      </StyledButtons>
    </StyledFilter>
  );
}

export default FilterContant;
const StyledFilter = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 600px) {
    padding: 1rem 0rem;
  }
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  @media (max-width: 600px) {
    height: 6rem;
  }
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledInput = styled.input`
  width: 30%;
  font-size: small;
  &::placeholder {
    font-size: small;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 30%;
    font-size: small;
    &::placeholder {
      font-size: x-small;
      text-align: center;
    }
    height: 100%;
  }
`;
const OptionContant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
const StyledButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const Label = styled.p`
  font-size: medium;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: small;
  }
`;
