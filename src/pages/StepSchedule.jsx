import { useContext, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { timeList, careTimeList } from '../temp/staticData';
import SelectBox from '../components/SelectBox';
import DateForm from '../components/DateForm';
import ScheduleModal from '../components/ScheduleModal';
import DateContext, { DateProvider } from '../context/DateContext';
import { FooterContext } from '../context/FooterContext';
import { ApplymentBriefContext } from '../context/ApplymentBriefContext';
import { formatDate, formatTime } from '../utilities/date';

export default function StepSchedule() {
  const { setActiveNext } = useContext(FooterContext);
  const { applymentBrief, setApplymentBrief } = useContext(ApplymentBriefContext);
  const { startDate, endDate, visitTime, hour } = useMemo(
    () => applymentBrief?.schedule || {},
    [applymentBrief?.schedule]
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [duration, setDuration] = useState(startDate ? [startDate, endDate] : []);
  const [careStartTime, setCareStartTime] = useState(visitTime || null);
  const [careTime, setCareTime] = useState(hour || null);
  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);

  useEffect(() => {
    if (duration.length === 2 && duration[0] && duration[1] && careTime && careStartTime) {
      setActiveNext(true);
      const schedule = {
        startDate: duration[0],
        endDate: duration[1],
        visitTime: careStartTime,
        hour: careTime,
      };
      setApplymentBrief((data) => ({
        ...data,
        schedule,
      }));
    }
  }, [duration, careTime, careStartTime, setActiveNext, setApplymentBrief]);

  return (
    <DateProvider>
      <Container>
        <DateFormWrap>
          <DateForm
            title="시작일"
            onClick={onOpenModal}
            duration={duration}
            setDuration={setDuration}
          />
          <DateForm
            title="종료일"
            onClick={onOpenModal}
            duration={duration}
            setDuration={setDuration}
          />
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
  padding: 32px 0 64px;
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
