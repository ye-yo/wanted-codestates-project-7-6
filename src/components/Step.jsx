import { useContext,useMemo } from 'react';
import { StepContext } from '../App';
import styled, { css } from 'styled-components';

const Step = ({children}) => {
  const { currentStep, totalStep } = useContext(StepContext);
  const {number, stepName,stepTitle} = useMemo(()=>currentStep,[currentStep]);
  return (
    number && <StepWrap>
      <StepProgress>
        <StepName>{stepName}</StepName>
        <StepNumber><b>{number}</b> / {totalStep}</StepNumber>
      </StepProgress>
      <StepTitle>{stepTitle}</StepTitle>
      <Content>{children}</Content>
    </StepWrap>
  );
};

export default Step;

const StepWrap = styled.main`
  width: 100%;
  padding: 16px;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  color:#5B5555;
  ${({ theme }) => {
  return css`
    padding-top: ${theme.headerHeight};
    padding-bottom:${theme.footerHeight};
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

const Content = styled.div`
  width: 100%;
`;
