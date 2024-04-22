import styled from "styled-components";

const ButtonText = styled.button`
  color: ${(props) => props.color || "var(--color-brand-600)"};
  font-size: ${(props) => props.fontSize || "inherit"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  outline: none;
  @media (max-width: 600px) {
    font-size: 9px;
  }
  &:hover,
  &:active {
    color: var(--color-gold-700);
  }
`;

export default ButtonText;
