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
  console.log(addressAutoFill, "___", street, "___", buildingNumber);
  //   const storedAddress = window.localStorage.getItem("address");

  //   const initialAddress = storedAddress ? JSON.parse(storedAddress) : [];

  //   const [address, setAddress] = useState(initialAddress);

  useEffect(() => {
    // Save address to local storage when any of the state variables change
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
        // address,
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
