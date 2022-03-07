import { useContext } from 'react';
import { StepContext } from '../App';
import styled, { css } from 'styled-components';

export default function Footer() {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const nextStep = () => {
    setCurrentStep({ ...currentStep, number: ++currentStep.number });
  };
  return (
    <FooterWrap>
      <Button>이전</Button>
      <Button type="main" onClick={nextStep}>
        다음
      </Button>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.footerHeight};
  padding: 8px;
  position: absolute;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Button = styled.button`
  height: 100%;
  font-size: 1rem;
  ${({ type, theme }) => css`
    ${type === 'main' ? theme.buttonMain : theme.buttonWhite}
    width:${type === 'main' ? 'calc(82% - 1rem)' : '18%'};
    min-width: fit-content;
    margin-left: ${type === 'main' && '8px'};
  `}
`;
