import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;

  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-grey-300);
  }

  & svg {
    @media (min-width: 600px) {
      width: ${(props) => (props.width ? `${props.width}px` : "2.2rem")};
      height: ${(props) => (props.height ? `${props.height}px` : "2.2rem")};
    }

    width: 2rem;
    height: 2rem;
  }
`;

export default ButtonIcon;
