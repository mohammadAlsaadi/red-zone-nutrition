import styled from "styled-components";
import CaloriesCalculator from "../featurs/calories-calculator/CaloriesCalculator";
import Heading from "../components/Heading";
import { HiLightBulb } from "react-icons/hi2";
import ProductsList from "../featurs/product/ProductsList";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function CalculateCalories() {
  const [calculatedTDEE, setCalculatedTDEE] = useState(0);
  const [categoryRecommended, setCategoryRecommended] = useState([]);
  const { t } = useTranslation();

  useEffect(
    function () {
      if (calculatedTDEE < 2000)
        setCategoryRecommended(["iso-protein", "whey-protein"]);
      else if (calculatedTDEE > 2000 && calculatedTDEE < 3000)
        setCategoryRecommended(["whey-protein", "snacks"]);
      else if (calculatedTDEE > 3000)
        setCategoryRecommended(["mass-gainers", "iso-protein", "whey-protein"]);
    },
    [calculatedTDEE]
  );
  return (
    <CalculateCaloriesLayout>
      {/* <Heading color="var(--color-grey-50)" as="h3">
        Know what calories you burn (BMR & TDEE)
      </Heading> */}
      <CaloriesCalculator setCalculatedTDEE={setCalculatedTDEE} />

      {calculatedTDEE !== 0 && (
        <ProductsContainer>
          <Heading as="h4">
            {t("We recommend these products based on your calories")} 🧐
          </Heading>
          <ProductsList categoryList={categoryRecommended} />
        </ProductsContainer>
      )}
      {calculatedTDEE !== 0 && (
        <ProductsContainer>
          <Heading as="h4">
            {t("Also for your performance we recommend")}
          </Heading>
          <ProductsList categoryList={["creatine", "pre-workout"]} />
        </ProductsContainer>
      )}

      <StyledFooter>
        <Heading color="var(--color-grey-200)" as="h3">
          {t("BMR & TDEE Meaning")}{" "}
          {<HiLightBulb color="var(--color-gold-500)" />}
        </Heading>
        <P>
          {t(
            "BMR is the minimal calories your body needs for vital functions at rest."
          )}
        </P>
        <P>
          {t(
            "TDEE is your total calorie burn daily, including activity. To find it, start with BMR. Knowing TDEE helps set calorie goals for weight loss."
          )}
        </P>
      </StyledFooter>
    </CalculateCaloriesLayout>
  );
}

export default CalculateCalories;
const CalculateCaloriesLayout = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: var(--color-grey-50);
  /* background-image: url("https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/fit.jpg"); */
  background-size: cover;
  background-position: center;
`;
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--color-grey-800);
  border-radius: 2rem;

  width: 90%;
  height: 30vh;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
`;
const P = styled.p`
  color: var(--color-grey-300);
  font-size: small;
`;
const ProductsContainer = styled.div`
  width: 100%;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
`;