import styled from "styled-components";
import LoginForm from "../featurs/authentication/LoginForm";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LoginLayout = styled.main`
  min-height: 70rem;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-grey-50);
`;
const Or = styled.div`
  /* margin-left: 20rem; */
  font-weight: bold;
  font-size: small;
  text-align: center;
  width: 100%;
`;
const StyledImg = styled.img`
  width: 130px;
  height: 110px;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <LoginLayout>
      <ImgContainer>
        <StyledImg
          onClick={() => navigate("/home")}
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzone.png"
        />
      </ImgContainer>
      <Heading as="h4">{t("Login to your account")}</Heading>
      <LoginForm />
      <Or>&ndash;&ndash;&ndash; {t("or")} &ndash;&ndash;&ndash;</Or>
      <ThirdPartyAuth />
    </LoginLayout>
  );
}

export default Login;
