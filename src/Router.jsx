import React, { useContext } from 'react';
import Step from './components/Step';
import StepAddress from './pages/StepAddress';
import FirstPage from './pages/FirstPage';
import Schedule from './pages/Schedule';
import StepApplymentBrief from './pages/StepApplymentBrief';
import { StepContext } from './context/StepContext';

const step = [
  '돌봄 유형 선택 페이지 개발 중입니다',
  <Schedule />,
  <StepAddress />,
  <StepApplymentBrief />,
];

function Router() {
  const { currentStep } = useContext(StepContext);
  return <>{currentStep.number < 0 ? <FirstPage /> : <Step>{step[currentStep.number]}</Step>};</>;
}

export default Router;
