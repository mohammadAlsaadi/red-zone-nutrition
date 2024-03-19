import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import styled from "styled-components";

const Stepper = ({ steps, currentStep, status }) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Phase isActive={index === currentStep}>
            {currentStep > index ? (
              <HiOutlineCheckCircle size={20} color="green" />
            ) : (
              <PhaseNumber isActive={index === currentStep}>
                {index}
              </PhaseNumber>
            )}{" "}
            {step}
          </Phase>
          {index < steps.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
};

const StepperContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
  align-items: center;
  width: 100%;
`;
const PhaseNumber = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 2rem;
  padding: 0.2rem 0.7rem;
  font-size: x-small;
  color: ${(props) => (props.isActive ? "var(--color-grey-0)" : "#007bff")};
  background-color: ${(props) =>
    props.isActive ? "#007bff" : "var(--color-grey-0)"};
  text-align: center;
`;

const Phase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  align-items: center;
  text-align: center;
  /* font-weight: bold; */
  font-size: small;
  color: ${(props) => (props.isActive ? "#007bff" : "#333")};
`;

const Divider = styled.div`
  flex: 0 0 auto;
  width: 7%;
  height: 2px;
  background-color: #ccc;
`;

export default Stepper;
