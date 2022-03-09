import React, { useContext } from 'react';
import Step from './components/Step';
import StepSelectType from './pages/StepSelectType';
import StepAddress from './pages/StepAddress';
import FirstPage from './pages/FirstPage';
import StepSchedule from './pages/StepSchedule';
import FinalPage from './pages/FinalPage';
import StepApplymentBrief from './pages/StepApplymentBrief';
import { StepContext } from './context/StepContext';

const step = [
  <StepSelectType />,
  <StepSchedule />,
  <StepAddress />,
  <StepApplymentBrief />,
  <FinalPage />,
];

function Router() {
  const { currentStep } = useContext(StepContext);
  return currentStep.number < 0 ? <FirstPage /> : <Step>{step[currentStep.number]}</Step>;
}

export default Router;
