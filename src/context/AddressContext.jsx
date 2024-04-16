import React, { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const storedAddress = JSON.parse(window.localStorage.getItem("address"));
  const [addressAutoFill, setAddressAutoFill] = useState(
    storedAddress ? storedAddress[0] : ""
  );
  const [street, setStreet] = useState(storedAddress ? storedAddress[1] : "");
  const [buildingNumber, setBuildingNumber] = useState(
    storedAddress ? storedAddress[2] : ""
  );
  console.log(addressAutoFill, "___", street, "___", buildingNumber);
  //   const storedAddress = window.localStorage.getItem("address");

  //   const initialAddress = storedAddress ? JSON.parse(storedAddress) : [];

  //   const [address, setAddress] = useState(initialAddress);

  //   useEffect(() => {
  //     // Save address to local storage when any of the state variables change
  //     window.localStorage.setItem("address", { street, buildingNumber });
  //   }, [addressAutoFill, street, buildingNumber]);

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
