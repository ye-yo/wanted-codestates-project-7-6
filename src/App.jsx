import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Step from './components/Step';
import { TOTAL_STEP, TEST_STEP } from './constants/step';

const step = ['첫 번째 STEP', 'Stpe2', '<Step3 />'];

export default function App() {
  const [currentStep, setCurrentStep] = useState(TEST_STEP);
  return (
    <ThemeProvider theme={theme}>
      <StepContext.Provider value={{ totalStep: TOTAL_STEP, currentStep, setCurrentStep }}>
        <Step>{currentStep.number && step[currentStep.number - 1]}</Step>
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
