import React, { createContext, useState } from 'react';

const AddressProvider = ({ children }) => {
  const addressValue = {
    addressDetail: String,
    jibunAddress: String,
    liName: String || null,
    locationCode: String,
    roadCode: String,
    myundongName: String,
    roadAddress: String,
    sidoName: String,
    sigunguName: String,
  };
  const [jusoData, setJusoData] = useState(addressValue);

  return (
    <AddressContext.Provider value={{ jusoData, setJusoData }}>{children}</AddressContext.Provider>
  );
};

export const AddressContext = createContext({
  jusoData: {},
  setJusoData: () => {},
});
export default AddressProvider;
