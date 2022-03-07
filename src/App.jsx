import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Step from './components/Step';
import { TOTAL_STEP, TEST_STEP } from './constants/step';

export default function App() {
  const [currentStep, setCurrentStep] = useState(TEST_STEP);
  return (
    <ThemeProvider theme={theme}>
      <StepContext.Provider value={{ totalStep: TOTAL_STEP, currentStep, setCurrentStep }}>
        <Step></Step>
        <GlobalStyle />
      </StepContext.Provider>
    </ThemeProvider>
  );
}

export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: null,
    stepName: '',
    stepTitle: '',
    hideFooter: false,
    hideTitle: false,
  },
  setCurrentStep: () => {},
});
