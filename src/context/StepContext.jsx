import React, { createContext, useState } from 'react';
import { TOTAL_STEP } from '../constants/step';

const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState({ number: -1 });

  return (
    <StepContext.Provider value={{ totalStep: TOTAL_STEP, currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: -1,
    hideFooter: false,
    hideTitle: false,
    hideHeader: false,
  },
  setCurrentStep: () => {},
});
export default StepProvider;
