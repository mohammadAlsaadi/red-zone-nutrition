import React, { useState } from "react";
import GoogleAutoComplete from "react-google-autocomplete";
import FormRow from "./FormRow";
import Input from "./Input";
import styled from "styled-components";
import Form from "./Form";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";
import { useAddressContext } from "../context/AddressContext";
import Button from "./Button";
import toast from "react-hot-toast";

function AddressesForm({ apiKey }) {
  const address = JSON.parse(window.localStorage.getItem("address"));
  const [isAddressSaved, setIsAdressSaved] = useState(
    address.addressAutoFill !== "" ||
      address.street !== "" ||
      address.buildingNumber !== ""
  );
  const [addressError, setAddressError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [buildingNumberError, setBuildingNumberError] = useState("");
  const {
    setAddressAutoFill,
    setStreet,
    setBuildingNumber,
    addressAutoFill,
    street,
    buildingNumber,
  } = useAddressContext();
  const { t } = useTranslation();
  const validateAddress = (place) => {
    if (!place || !place.formatted_address) {
      setAddressError(t("This field is required"));
      return false;
    }
    setAddressError("");
    return true;
  };
  const validateStreet = (street) => {
    if (!street || !/^[a-zA-Z\sا-ي]+$/.test(street)) {
      setStreetError(t("Please enter a valid street name"));
      return false;
    }
    setStreetError("");
    return true;
  };

  const validateBuildingNumber = (buildingNumber) => {
    if (!buildingNumber || !/^\d+$/.test(buildingNumber)) {
      setBuildingNumberError(t("Please enter a valid building number"));
      return false;
    }
    setBuildingNumberError("");
    return true;
  };

  const handlePlaceSelected = (place) => {
    validateAddress(place);
    setAddressAutoFill(place?.formatted_address);
  };

  const handleStreetChange = (e) => {
    const street = e.target.value;
    validateStreet(street);
    setStreet(street);
  };

  const handleBuildingNumberChange = (e) => {
    const buildingNumber = e.target.value;
    validateBuildingNumber(buildingNumber);
    setBuildingNumber(buildingNumber);
  };
  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (isAddressSaved === false) {
      window.localStorage.setItem(
        "address",
        JSON.stringify({ addressAutoFill, street, buildingNumber })
      );
      toast.success("Address was saved");
      setIsAdressSaved((isSaved) => !isSaved);
    } else {
      setIsAdressSaved(false);
    }
  };

  return (
    <FormContainer>
      <Form>
        <StyledHeader>
          <Heading as="h5">{t("Address Information")}</Heading>
        </StyledHeader>
        {!isAddressSaved ? (
          <FormRow errors={addressError} id="address" label="Country/City">
            <GoogleAutoComplete
              style={{
                border: "1px solid var(--color-grey-300)",
                backgroundColor: "var(--color-grey-0)",
                borderRadius: "var(--border-radius-sm)",
                boxShadow: "var(--shadow-sm)",
                padding: "0.5rem 1.5rem",
              }}
              apiKey={apiKey}
              placeholder={t("Amman, Jordan")}
              onChange={(e) => setAddressAutoFill(e.target.value)}
              onPlaceSelected={handlePlaceSelected}
            />
          </FormRow>
        ) : (
          <FormRow id="address" label="Country/City">
            <Input
              placeholder={
                isAddressSaved ? address?.addressAutoFill : t("Amman, Jordan")
              }
              disabled={true}
            />
          </FormRow>
        )}
        <FormRow errors={streetError} id="Street" label="Street">
          <Input
            type="text"
            placeholder={
              isAddressSaved ? address?.street : t("Pr. Hamzeh Street")
            }
            onChange={handleStreetChange}
            disabled={isAddressSaved}
          />
        </FormRow>
        <FormRow
          id="buildingNumber"
          errors={buildingNumberError}
          label="Building Number"
        >
          <Input
            placeholder={isAddressSaved ? address?.buildingNumber : "105"}
            type="number"
            onChange={handleBuildingNumberChange}
            disabled={isAddressSaved}
          />
        </FormRow>
      </Form>
      <ButtonContainer>
        <Button onClick={handleSaveAddress}>
          {isAddressSaved
            ? t("Edit address information")
            : t("save address information")}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default AddressesForm;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: flex-end;
`;
const FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-grey-0);
  height: 100%;
  padding: 2rem 0rem;
`;
