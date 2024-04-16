import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    //
    @media (max-width: 600px) {
      font-size: 0.8rem;
      padding: 0.6rem 1.6rem;
      text-transform: lowercase;
    }
    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
    @media (min-width: 700px) {
      font-size: 1.3rem;
      padding: 0.8rem 1.6rem;
    }
    @media (min-width: 900px) {
      font-size: 1.5rem;
      padding: 0.8rem 1.6rem;
    }
    @media (min-width: 1100px) {
      font-size: 1.8rem;
      padding: 0.8rem 1.6rem;
    }
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    font-weight: 500;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 1.1rem;
      padding: 0.8rem 1.6rem;
    }
    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
    @media (min-width: 700px) {
      font-size: 1.2rem;
    }
    @media (min-width: 900px) {
      font-size: 1.4rem;
    }
    @media (min-width: 1100px) {
      font-size: 1.6rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  tallerHerzontally: css`
    font-size: 1.6rem;
    padding: 0.6rem 8rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: ${(props) =>
      props.color ? props.color : "var(--color-grey-900)"};

    &:hover {
      background-color: var(--color-grey-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  transparent: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--backdrop-color);
      color: var(--color-grey-0);
    }
    &:focus {
      outline: none;
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: ${(props) =>
    props.borderradius === "circle" ? "20px" : "none"};
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  ${(props) =>
    props.disabledColor &&
    css`
      background-color: var(--color-grey-500);
      &:hover {
        background-color: var(--color-grey-500);
      }
    `}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
