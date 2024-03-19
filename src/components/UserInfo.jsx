import styled from "styled-components";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";
import { useUser } from "../featurs/authentication/useUser";
function UserInfo() {
  const { user, isAuthenticated } = useUser();
  const { fullName, phone } = user?.user_metadata;
  const { email } = user;
  return (
    <StyledForm>
      <Form>
        <FormRow label="Your Full Name">
          <Input
            // disabled={isLoading}
            // type="email"
            // id="email"
            // placeholder="xx@xx.com"
            value={fullName}
            disabled={true}
            // {...register("email", {
            //   required: "this field is required",
            //   pattern: {
            //     value: /\S+@\S+\.\S+/,
            //     message: "Please provide a valid email address",
            //   },
            // })}
          />
        </FormRow>
        <FormRow label="Your Email">
          <Input
            // disabled={isLoading}
            type="email"
            id="email"
            // placeholder="xx@xx.com"
            value={email}
            disabled={true}
            // {...register("email", {
            //   required: "this field is required",
            //   pattern: {
            //     value: /\S+@\S+\.\S+/,
            //     message: "Please provide a valid email address",
            //   },
            // })}
          />
        </FormRow>
        <FormRow label="Your Phone">
          <Input
            // disabled={isLoading}
            // type="email"
            // id="email"
            // placeholder="xx@xx.com"
            value={phone}
            disabled={true}
            // {...register("email", {
            //   required: "this field is required",
            //   pattern: {
            //     value: /\S+@\S+\.\S+/,
            //     message: "Please provide a valid email address",
            //   },
            // })}
          />
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
