import styled from "styled-components";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import SignupForm from "../featurs/authentication/SignupForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <RegisterLayout>
      <ImgContainer>
        <StyledImg
          onClick={() => navigate("/home")}
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzone.png"
        />
      </ImgContainer>
      <Heading as="h4">{t("Create a new account")}</Heading>
      <SignupForm />
    </RegisterLayout>
  );
}

export default Register;

const RegisterLayout = styled.div`
  /* min-height: 100vh; */
  /* padding-left: 10rem; */
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 48rem; */
  align-content: center;
  justify-content: center;
  width: 100%;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
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
