import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function SwitchButton({
  label1 = "1",
  label2 = "2",
  label3,
  width,
  height,
  setStock,
  stock,
}) {
  const [isSelectedOp1, setIsSelectedOp1] = useState(true);
  const [isSelectedOp2, setIsSelectedOp2] = useState(false);
  const [isSelectedOp3, setIsSelectedOp3] = useState(false);
  const { t } = useTranslation();
  return (
    <StyledSwitchButton width={width} height={height}>
      <StyledButton
        selected={isSelectedOp1}
        onClick={() => {
          setIsSelectedOp2(false);
          setIsSelectedOp3(false);
          setIsSelectedOp1(true);
          setStock((stock) => label1);
        }}
      >
        {t(label1)}
      </StyledButton>
      <StyledButton
        selected={isSelectedOp2}
        onClick={() => {
          setIsSelectedOp1(false);
          setIsSelectedOp3(false);
          setIsSelectedOp2(true);
          setStock((stock) => label2);
        }}
      >
        {t(label2)}
      </StyledButton>
      {label3 && (
        <StyledButton
          selected={isSelectedOp3}
          onClick={() => {
            setIsSelectedOp1(false);
            setIsSelectedOp2(false);
            setIsSelectedOp3(true);
            setStock((stock) => label3);
          }}
        >
          {t(label3)}
        </StyledButton>
      )}
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
