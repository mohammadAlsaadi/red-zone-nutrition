import React, { useState } from "react";
import styled from "styled-components";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import InpBMRut from "../../components/Input";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

// Activity levels and their corresponding multipliers for TDEE calculation
const activityLevels = {
  sedentary: 1.2,
  lightlyActive: 1.375,
  moderatelyActive: 1.55,
  veryActive: 1.725,
  extraActive: 1.9,
};

// BMR calculation functions based on gender
const calculateBMR = (weight, height, age, gender) => {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// Component
function CaloriesCalculator({ setCalculatedTDEE }) {
  const [errors, setErrors] = useState({});
  const [BMR, setBMR] = useState(0);
  const [TDEE, setTDEE] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "male",
    activityLevel: "sedentary",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { height, weight, age, gender, activityLevel } = formData;

    // Basic validation
    const errors = {};
    if (!height) errors.height = "Height is required";
    if (!weight) errors.weight = "Weight is required";
    if (!age) errors.age = "Age is required";

    if (Object.keys(errors).length === 0) {
      const calculatedBMR = calculateBMR(weight, height, age, gender);
      setBMR(calculatedBMR);
      const calculatedTDEE = calculatedBMR * activityLevels[activityLevel];
      setTDEE(calculatedTDEE);
      setCalculatedTDEE(calculatedTDEE);
    } else {
      setErrors(errors);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading as="h4"> {t("Calculate your BMR & TDEE")}</Heading>
        <FormRow label="Height (cm)" errors={errors.height}>
          <Input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Weight (kg)" errors={errors.weight}>
          <Input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Age" errors={errors.age}>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Gender">
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">{t("Male")}</option>
            <option value="female">{t("Female")}</option>
          </Select>
        </FormRow>
        <FormRow label="Activity Level:" errors={errors.activityLevel}>
          <Select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            {Object.keys(activityLevels).map((key) => (
              <option key={key} value={key}>
                {t(key)}
              </option>
            ))}
          </Select>
        </FormRow>
        <Button variation="primary" size="medium" disabled={isLoading}>
          {isLoading ? t("Calculating...") : t("Calculate")}
        </Button>
      </Form>
      {BMR !== 0 && TDEE !== 0 ? (
        <Form>
          <Heading as="h4">
            {t("Basal Metabolic Rate (BMR):")} {BMR} kcal
          </Heading>
          <Heading as="h4">
            {t("Total Daily Energy Expenditure (TDEE):")} {TDEE} kcal
          </Heading>
        </Form>
      ) : (
        <Form>
          <Heading as="h4">
            {t("Please enter all values to calculate your calories")}🙋‍♂️
          </Heading>
        </Form>
      )}
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  width: 100%;
  gap: 2rem;
  padding-top: 4rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// const SubmitButton = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

export default CaloriesCalculator;
