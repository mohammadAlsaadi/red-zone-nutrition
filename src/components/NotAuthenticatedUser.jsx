import styled from "styled-components";
// import Form from "./Form";
// import FormRow from "./FormRow";
// import Input from "./Input";
import SignupForm from "../featurs/authentication/SignupForm";
function NotAuthenticatedUser() {
  return (
    <StyledForm>
      <SignupForm />
    </StyledForm>
  );
}

export default NotAuthenticatedUser;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;
