import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 2rem;
      @media (min-width: 1000px) {
        margin: 0rem 15rem;
      }
      @media (min-width: 1200px) {
        margin: 0rem 25rem;
      }
      @media (min-width: 600px) {
        margin: 0rem 5rem;
      }
      @media (max-width: 600px) {
        margin: 0rem 2rem;
      }
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      /* width: 70rem; */
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
