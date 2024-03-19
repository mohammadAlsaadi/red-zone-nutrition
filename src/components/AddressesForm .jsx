import React, { useState } from "react";
import GoogleAutoComplete from "react-google-autocomplete";
import FormRow from "./FormRow";
import Input from "./Input";
import styled from "styled-components";
import Form from "./Form";
import Heading from "./Heading";

function AddressesForm({
  setAdressAutoFill,

  setStreet,
  setBuildingNumber,
  apiKey,
}) {
  const [addressError, setAddressError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [buildingNumberError, setBuildingNumberError] = useState("");

  const validateAddress = (place) => {
    if (!place || !place.formatted_address) {
      setAddressError("This field is required");
      return false;
    }
    setAddressError("");
    return true;
  };

  const validateStreet = (street) => {
    if (!street || !/^[a-zA-Z\s]+$/.test(street)) {
      setStreetError("Please enter a valid street name");
      return false;
    }
    setStreetError("");
    return true;
  };

  const validateBuildingNumber = (buildingNumber) => {
    if (!buildingNumber || !/^\d+$/.test(buildingNumber)) {
      setBuildingNumberError("Please enter a valid building number");
      return false;
    }
    setBuildingNumberError("");
    return true;
  };

  const handlePlaceSelected = (place) => {
    validateAddress(place);
    setAdressAutoFill(place);
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

  return (
    <Form>
      <StyledHeader>
        <Heading as="h5">Address Information</Heading>
      </StyledHeader>
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
          placeholder="Amman, Jordan"
          onPlaceSelected={handlePlaceSelected}
        />
        {/* <ValidationMessage>{addressError}</ValidationMessage> */}
      </FormRow>
      <FormRow errors={streetError} id="Street" label="Street">
        <Input
          type="text"
          placeholder="Pr. Hamzeh Street"
          onChange={handleStreetChange}
        />
        {/* <ValidationMessage>{streetError}</ValidationMessage> */}
      </FormRow>
      <FormRow
        id="buildingNumber"
        errors={buildingNumberError}
        label="Building Number"
      >
        <Input
          placeholder="105"
          type="number"
          onChange={handleBuildingNumberChange}
        />
        {/* <ValidationMessage>{buildingNumberError}</ValidationMessage> */}
      </FormRow>
    </Form>
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

const ValidationMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 0.5rem;
`;
