import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
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

    width: 1.6rem;
    height: 1.6rem;
    /* color: var(--color-brand-600); */
  }
`;

export default ButtonIcon;
