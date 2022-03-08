import React, { useContext } from 'react';
import { StepContext } from '../App';
import styled from 'styled-components';

const FirstPage = () => {
  const { step, setStep } = useContext(StepContext);

  return (
    <Container>
      <CardContainer>
        <SubTitle>어르신 돌보미</SubTitle>
        <Title>케어코디</Title>
      </CardContainer>
      <LandingButton onClick={() => setStep({ ...step, number: 0 })}>신청하기</LandingButton>
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
  line-height: 1rem;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.buttonMain.backgroundColor};
  padding-bottom: 40px;
`;

const LandingButton = styled.button`
  color: ${({ theme }) => theme.buttonMain};
  width: 220px;
  height: 60px;
  border-radius: 110px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export default FirstPage;
