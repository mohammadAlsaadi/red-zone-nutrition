import React, { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const storedAddress = JSON.parse(window.localStorage.getItem("address"));
  const [addressAutoFill, setAddressAutoFill] = useState(
    storedAddress ? storedAddress.addressAutoFill : ""
  );
  const [street, setStreet] = useState(
    storedAddress ? storedAddress.street : ""
  );
  const [buildingNumber, setBuildingNumber] = useState(
    storedAddress ? storedAddress.buildingNumber : ""
  );

  useEffect(() => {
    if (addressAutoFill !== undefined || street || buildingNumber) {
      window.localStorage.setItem(
        "address",
        JSON.stringify({
          addressAutoFill,
          street,
          buildingNumber,
        })
      );
    }
  }, [addressAutoFill, street, buildingNumber]);

  return (
    <AddressContext.Provider
      value={{
        addressAutoFill,
        setAddressAutoFill,
        street,
        setStreet,
        buildingNumber,
        setBuildingNumber,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

function useAddressContext() {
  const context = useContext(AddressContext);
  if (context === undefined)
    throw new Error("useAddressContext must be used within an AddressProvider");
  return context;
}

export { AddressProvider, useAddressContext };
