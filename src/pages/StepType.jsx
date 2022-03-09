import React, { useContext, useEffect } from 'react';
import { FooterContext } from '../App';

const StepType = () => {
  const { setActiveNext } = useContext(FooterContext);
  useEffect(() => setActiveNext(true), [setActiveNext]);

  return <div>돌봄 유형 선택 페이지 개발중입니다</div>;
};

export default StepType;
