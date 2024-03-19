import styled from "styled-components";

const ButtonText = styled.button`
  color: ${(props) => props.color || "var(--color-brand-600)"};
  font-size: ${(props) => props.fontSize || "inherit"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  outline: none; /* Add this line to remove the outline */

  &:hover,
  &:active {
    color: var(--color-gold-700);
  }
`;

export default ButtonText;
