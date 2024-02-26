import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30rem 1fr 1.2fr;
  gap: 2.4rem;
  @media (max-width: 900px) {
    grid-template-columns: 15rem 1fr 1.2fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 10rem 1fr 1.2fr;
  }

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: x-small;
  }
  @media (max-width: 900px) {
    font-size: small;
  }
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-700);
  /* @media (max-width: 600px) {
    font-size: x-small;
  }
  @media (max-width: 900px) {
    font-size: small;
  } */
`;

function FormRow({ label, errors, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {errors && <Error>{errors}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
