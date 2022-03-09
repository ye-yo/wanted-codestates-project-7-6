import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { timeList, careTimeList } from '../temp/staticData';
import SelectBox from '../components/SelectBox';
import DateForm from '../components/DateForm';
import ScheduleModal from '../components/ScheduleModal';
import { DateProvider } from '../context/DateContext';
import { FooterContext } from '../App';

export default function StepSchedule() {
  const { setActiveNext } = useContext(FooterContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [duration, setDuration] = useState([]);
  const [careTime, setCareTime] = useState();
  const [careStartTime, setCareStartTime] = useState();

  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);

  useEffect(() => setActiveNext(false), [setActiveNext]);

  useEffect(() => {
    if (duration.length === 2 && duration[0] && duration[1] && careTime && careStartTime)
      setActiveNext(true);
  }, [duration, careTime, careStartTime, setActiveNext]);

  return (
    <DateProvider>
      <Container>
        <DateFormWrap>
          <DateForm title="시작일" onClick={onOpenModal} setDuration={setDuration} />
          <DateForm title="종료일" onClick={onOpenModal} setDuration={setDuration} />
        </DateFormWrap>
        <SelectBox
          name="돌봄 시작 시간"
          data={timeList}
          selected={careStartTime}
          setSelected={setCareStartTime}
        />
        <SelectBox
          name="하루 돌봄 시간"
          data={careTimeList}
          selected={careTime}
          setSelected={setCareTime}
        />
      </Container>
      {modalOpen && <ScheduleModal onClose={onCloseModal} />}
    </DateProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 64px;
  margin: 0 auto;
  font-weight: bold;
  label {
    line-height: 20px;
    margin-bottom: 8px;
  }
  overflow: hidden;
`;

const DateFormWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
