import styled from "styled-components";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

function GoalForm({ goalForm, setGoalForm, showResult, setShowResult }) {
  const [isOpened, setIsOpened] = useState(false);
  const examplePhoto =
    goalForm.gender === "male"
      ? "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/bodyFatMale.jpg"
      : "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/bodyFatFemale.jpg";
  const gender = ["male", "female"];
  const goalOptions = ["loss fat", "maintain weight", "gain weight"];
  const fatOptions =
    goalForm.gender === "male"
      ? [
          "35-40%",
          "25-30%",
          "20-24%",
          "16-19%",
          "13-15%",
          "11-12%",
          "8-10%",
          "5-7%",
          "1-4%",
        ]
      : ["more than 45%", "40%", "35%", "30%", "25%", "20%", "15%", "12%"];

  function handleShowHidden(e) {
    e.preventDefault();
    setShowResult((show) => !show);
  }
  function handleOpenClose(e) {
    e.preventDefault();
    setIsOpened((isOpen) => !isOpen);
  }
  return (
    <Form>
      <Heading as="h4"> Get expert guidance for your supplement needs</Heading>
      <br />
      <FormRow label="Gender">
        <Select
          name="gender"
          value={goalForm.gender}
          onChange={(e) => setGoalForm({ ...goalForm, gender: e.target.value })}
        >
          {gender.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow label="Your Goal ?">
        <Select
          name="activityLevel"
          value={goalForm.goal}
          onChange={(e) => setGoalForm({ ...goalForm, goal: e.target.value })}
        >
          {goalOptions.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow label="Your body fat%">
        <StyledBodyFatContainer>
          <Select
            name="bodyFat"
            value={goalForm.bodyFat}
            onChange={(e) =>
              setGoalForm({ ...goalForm, bodyFat: e.target.value })
            }
          >
            {fatOptions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </Select>
          <Button size="small" onClick={handleOpenClose}>
            {isOpened ? "Close" : "Show Examples"}
          </Button>
        </StyledBodyFatContainer>
      </FormRow>
      {isOpened && (
        <Centralized>
          <img src={examplePhoto} width={400} height={300} alt="example" />
        </Centralized>
      )}{" "}
      <br />
      <Centralized>
        <Button onClick={handleShowHidden} size="tallerHerzontally">
          {showResult ? "Hidden" : " Show products that fit my goal"}
        </Button>
      </Centralized>
    </Form>
  );
}

export default GoalForm;
const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const StyledBodyFatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-left: 10rem;
`;
const Centralized = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
