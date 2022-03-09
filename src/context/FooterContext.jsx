import React, { createContext, useState } from 'react';

const FooterProvider = ({ children }) => {
  const [activeNext, setActiveNext] = useState(false);

  return (
    <FooterContext.Provider value={{ activeNext, setActiveNext }}>
      {children}
    </FooterContext.Provider>
  );
};
export const FooterContext = createContext({
  activeNext: false,
  setActiveNext: () => {},
});
export default FooterProvider;
