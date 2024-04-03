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
  const handleFilter = () => {
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

    onCloseModal();
  };
  return (
    <StyledFilter>
      <Heading as="h3">{t("Filter by")}</Heading>
      <OptionContainer>
        <Heading as="h4">{t("Price")}</Heading>
        <OptionContant>
          <InputContainer>
            <Heading as="h5">{t("From")}</Heading>
            <StyledInput
              placeholder={placeHolderValue1}
              type="number"
              onChange={(e) => setFromValue(e.target.value)}
            />
            <Heading as="h6">{t("JOD")}</Heading>
          </InputContainer>
          <InputContainer>
            <Heading as="h5">{t("to")}</Heading>
            <StyledInput
              placeholder={placeHolderValue2}
              type="number"
              onChange={(e) => setToValue(e.target.value)}
            />
            <Heading as="h6">{t("JOD")}</Heading>
          </InputContainer>
        </OptionContant>
      </OptionContainer>
      <OptionContainer>
        <Heading as="h4">{t("Stock")}</Heading>
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
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
