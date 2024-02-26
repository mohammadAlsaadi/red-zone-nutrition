import styled from "styled-components";
import LoginForm from "../featurs/authentication/LoginForm";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
const LoginLayout = styled.main`
  min-height: 95vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-grey-50);
`;
const Or = styled.div`
  margin-left: 20rem;
  font-weight: bold;
  font-size: small;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Login to your account</Heading>
      <LoginForm />
      <Or>&ndash;&ndash;&ndash; or &ndash;&ndash;&ndash;</Or>
      <ThirdPartyAuth />
    </LoginLayout>
  );
}

export default Login;
