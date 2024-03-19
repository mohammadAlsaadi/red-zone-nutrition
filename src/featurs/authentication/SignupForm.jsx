import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useSignup } from "./useSignup";
import Spinner from "../../components/Spinner";
import Heading from "../../components/Heading";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();
  function handleNavigate(e) {
    e.preventDefault();
    navigate("/login");
  }

  function onSubmit({ fullName, email, password, phone }) {
    const newUser = { fullName, email, password, phone };
    signup(newUser, { onSettled: () => reset() });
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" errors={errors?.fullName?.message}>
          <Input
            disabled={isLoading}
            type="text"
            id="fullName"
            {...register("fullName", { required: "this field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" errors={errors?.email?.message}>
          <Input
            disabled={isLoading}
            type="email"
            id="email"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters)"
          errors={errors?.password?.message}
        >
          <Input
            disabled={isLoading}
            type="password"
            id="password"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
              validate: (value) => {
                // Check if the password contains at least one capital letter
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one capital letter";
                }
                return true; // Validation passed
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat password"
          errors={errors?.passwordConfirm?.message}
        >
          <Input
            disabled={isLoading}
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
          />
        </FormRow>
        <FormRow
          label="Phone number - start with (07x)"
          errors={errors?.phone?.message}
        >
          <Input
            disabled={isLoading}
            type="tel"
            id="phone"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please provide a valid phone number",
              },
            })}
          />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            Create new user
          </Button>
        </FormRow>
        <StyledContainer>
          <Heading as="h5">Do you have an account? </Heading>
          <ButtonText
            onClick={handleNavigate}
            color="var(--color-red-500)"
            fontSize="small"
          >
            Login
          </ButtonText>
        </StyledContainer>
      </Form>
    </>
  );
}

export default SignupForm;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5rem;
  gap: 1rem;
`;
