import { useContext,useMemo } from 'react';
import { StepContext } from '../App';
import styled, { css } from 'styled-components';

const Step = () => {
  const { currentStep, totalStep } = useContext(StepContext);
  const {number, stepName,stepTitle} = useMemo(()=>currentStep,[currentStep]);
  return (
    number && <StepWrap>
      <StepProgress>
        <StepName>{stepName}</StepName>
        <StepNumber><b>{number}</b> / {totalStep}</StepNumber>
      </StepProgress>
      <StepTitle>{stepTitle}</StepTitle>
    </StepWrap>
  );
};

export default Step;

const StepWrap = styled.div`
  width: 100%;
  margin-top: 56px;
  padding: 16px;
  height: 100%;
  color:#5B5555;
  ${({ theme }) => {
  return css`
    max-height: ${`calc(100% - ${theme.headerHeight} - ${theme.footerHeight})`};
   }`
  }}
`;

const StepProgress = styled.div`
  > *{
  vertical-align: middle;
  }
`;
const StepName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 4px;
`;
const StepNumber = styled.span`
  ${({ theme }) => {
  return css`
    color: ${theme.fontGray};
    font-size: 1rem;
    & > b{
      color: ${theme.mainColor};
    }`
  }}
`;

const StepTitle = styled.h1`
  font-size: 1.8rem;
`;
