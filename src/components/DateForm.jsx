import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CalendarIcon } from '../assets/calendar_icon.svg';
import DateContext from '../context/DateContext';

const DateForm = ({ title, onClick, setDuration }) => {
  const { startDate, endDate, getDateKorean } = useContext(DateContext);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if ((title === '시작일' && startDate) || (title === '종료일' && endDate)) setFilled(true);
    setDuration([startDate, endDate]);
  }, [startDate, endDate, setDuration, title]);

  return (
    <DateFormStyled>
      <label>{title}</label>
      <Button onClick={onClick} filled={filled}>
        <span>
          {title === '시작일' && (startDate ? getDateKorean(startDate) : '날짜 선택')}
          {title === '종료일' && (endDate ? getDateKorean(endDate) : '날짜 선택')}
        </span>
        <CalendarIcon />
      </Button>
    </DateFormStyled>
  );
};

export default DateForm;

const DateFormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &: first-child {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  height: 48px;
  background: ${({ theme }) => theme.inputGray.backgroundColor};
  border-radius: 4px;
  border: 0;
  outline: 0;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px;
  span {
    color: ${({ filled, theme }) => (filled ? theme.fontColor : theme.buttonGray.color)};
    font-weight: 500;
  }
  svg {
    position: absolute;
    right: 16px;
    ${({ filled, theme }) => (filled ? `fill: ${theme.fontColor}` : '')};
    path {
      ${({ filled, theme }) => (filled ? `fill: ${theme.fontColor}` : '')};
    }
  }
`;
