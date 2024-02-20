import styled from "styled-components";

const ButtonText = styled.button`
  color: ${(props) => props.color || "var(--color-brand-600)"};
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
