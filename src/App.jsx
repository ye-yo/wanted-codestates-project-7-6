import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Footer from './components/Footer';
import Step from './components/Step';

const totalStep = 4;

const testStep = {
  number: 1,
  stepName:'돌봄 유형',
  stepTitle: '돌봄 유형를 설정해주세요',
}
export default function App() {
  const [currentStep, setCurrentStep] = useState(testStep);
  return (
    <ThemeProvider theme={theme}>
      <StepContext.Provider value={{ totalStep, currentStep, setCurrentStep }}>
      <Step></Step>
      <Footer/>
      <GlobalStyle />
      </StepContext.Provider>
    </ThemeProvider>
  );
}

export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: null,
    stepName:'',
    stepTitle: '',
  },
  setCurrentStep: () => {},
});