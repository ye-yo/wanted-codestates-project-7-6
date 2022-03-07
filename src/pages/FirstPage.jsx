import React, { useContext } from 'react';
import { StepContext } from '../App';
import styled from 'styled-components';
import theme from '../styles/theme';

const FirstPage = () => {
  const { step, setStep } = useContext(StepContext);

  return (
    <Container>
      <CardContainer>
        <SubTitle>어르신 돌보미</SubTitle>
        <Title>케어코디</Title>
      </CardContainer>
      <LandingButton onClick={() => setStep(step + 1)}>신청하기</LandingButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 768px;
  height: 100vh;
  margin: 0 auto;
  font-weight: 600;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  line-height: 3rem;
`;

const SubTitle = styled.div`
  color: ${theme.fontColor};
`;

const Title = styled.div`
  color: ${theme.buttonMain.backgroundColor};
  padding-bottom: 40px;
`;

const LandingButton = styled.button`
  color: ${theme.buttonMain};
  width: 220px;
  height: 60px;
  border-radius: 110px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export default FirstPage;
