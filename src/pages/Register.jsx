import styled from "styled-components";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import SignupForm from "../featurs/authentication/SignupForm";

function Register() {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Careat a new account</Heading>
      <SignupForm />
    </RegisterLayout>
  );
}

export default Register;

const RegisterLayout = styled.div`
  /* min-height: 100vh; */
  /* padding-left: 10rem; */
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 48rem; */
  align-content: center;
  justify-content: center;
  width: 100%;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
