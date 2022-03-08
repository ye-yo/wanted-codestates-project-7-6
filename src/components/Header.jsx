import { useContext } from 'react';
import { StepContext } from '../App';
import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../assets/arrow_icon.svg';
import { ReactComponent as Close } from '../assets/close_icon.svg';

function Header({ title, prev = false, close = false }) {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const prevStep = () => {
    setCurrentStep({ ...currentStep, number: currentStep.number - 1 });
  };
  return (
    <Container>
      <Item>
        <ArrowIcon prev={prev} onClick={prevStep} />
      </Item>
      <Item>{title}</Item>
      <Item>
        <CloseIcon close={close} />
      </Item>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const ArrowIcon = styled(Arrow)`
  display: none;
  ${(props) =>
    props.prev &&
    css`
      display: block;
      cursor: pointer;
    `}
`;
const CloseIcon = styled(Close)`
  display: none;
  ${(props) =>
    props.close &&
    css`
      display: block;
      cursor: pointer;
    `}
`;
