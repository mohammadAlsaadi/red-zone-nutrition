import styled from "styled-components";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";
import { useUser } from "../featurs/authentication/useUser";
import { useTranslation } from "react-i18next";
function UserInfo() {
  const { user } = useUser();
  const { t } = useTranslation();

  const { fullName, phone } = user?.user_metadata;
  const { email } = user;
  return (
    <StyledForm>
      <Form>
        <FormRow label={t("Your Full Name")}>
          <Input value={fullName} disabled={true} />
        </FormRow>
        <FormRow label={t("Your Email")}>
          <Input type="email" id="email" value={email} disabled={true} />
        </FormRow>
        <FormRow label={t("Your Phone")}>
          <Input value={phone} disabled={true} />
        </FormRow>
      </Form>
    </StyledForm>
  );
}

export default UserInfo;
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;
