import React from 'react';
import styled from 'styled-components';
import CalenderView from './Calendar/CalenderView';
import { ReactComponent as CloseIcon } from '../assets/close_icon.svg';

const ScheduleModal = ({ onClose }) => {
  return (
    <ScheduleModalStyled>
      <Header>
        <p>돌봄 날짜 선택</p>
        <CloseButton onClick={onClose} />
      </Header>
      <CalenderView />
    </ScheduleModalStyled>
  );
};

const ScheduleModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 1.62;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundGray};
  position: relative;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 16px;
`;

export default ScheduleModal;
