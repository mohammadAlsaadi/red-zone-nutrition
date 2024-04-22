import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function SwitchButton({ width, height, setStock, stock, labels }) {
  const [selectedLabel, setSelectedLabel] = useState(stock);
  const { t } = useTranslation();
  console.log(selectedLabel);
  return (
    <StyledSwitchButton width={width} height={height}>
      {labels.map((label, index) => (
        <StyledButton
          selected={selectedLabel === labels[index]}
          onClick={() => {
            setSelectedLabel(label);
            setStock(selectedLabel);
          }}
        >
          {t(label)}
        </StyledButton>
      ))}
    </StyledSwitchButton>
  );
}

export default SwitchButton;
const StyledSwitchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  background-color: var(--color-grey-100);
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  @media (max-width: 600px) {
    font-size: small;
  }
  @media (min-width: 900px) {
    font-size: medium;
  }
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  font-size: x-small;
  padding: 0.5rem 0.8rem;
  height: 80%;
  border: ${(props) => props.selected && "1px solid var(--color-grey-800)"};
  background-color: ${(props) => props.selected && "var(--color-grey-0)"};
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-200);
  }
  @media (max-width: 600px) {
    padding: 0rem 0.3rem;
  }
  @media (min-width: 900px) {
    padding: 0.6rem 1rem;
  }
`;
