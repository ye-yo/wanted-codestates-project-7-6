import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../assets/arrow_icon.svg';
import { ReactComponent as Close } from '../assets/close_icon.svg';
import { PageStepContext } from '../App';

function Header({ title, prev, close }) {
  const { step, setStep } = useContext(PageStepContext);

  return (
    <Container>
      <Item>
        <ArrowIcon prev={prev} onClick={() => setStep(step - 1)} />
      </Item>
      <Item>{title}</Item>
      <Item>
        <CloseIcon close={close} onClick={() => setStep(step - 1)} />
      </Item>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  height: 56px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  padding: 15px;
  font-weight: 700;
  color: #5b5555;
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
