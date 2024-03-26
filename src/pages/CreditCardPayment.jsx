import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  max-width: 40rem;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 100%;
  /* margin: auto; */
  padding: 20px;
  margin-top: 2rem;
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  /* text-align: center; */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const CreditCardPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const { t } = useTranslation();

  const handlePayment = () => {
    // Implement your payment logic here
    console.log("Payment submitted!");
  };

  return (
    <Wrapper>
      <Title>{t("Enter Credit Card Information")}</Title>
      <img
        src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/credit-card.png"
        width={250}
        height={150}
        alt="credit"
      />
      <FormGroup>
        <Label>{t("Card Number")}</Label>
        <Input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>{t("Expiry Date")}</Label>
        <Input
          type="text"
          placeholder="MM/YYYY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>{t("CVC")}</Label>
        <Input
          type="text"
          placeholder="123"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </FormGroup>
      <Button
        variation="primary"
        size="tallerHerzontally"
        onClick={handlePayment}
      >
        {t("Submit Payment")}
      </Button>
    </Wrapper>
  );
};

export default CreditCardPayment;
