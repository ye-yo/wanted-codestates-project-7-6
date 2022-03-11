import { rgba } from 'polished';
import { useEffect, useRef, useState, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import { Body1, Body3, Body4, Caption2, Caption3 } from '../components/Text';
import { PHONE_AUTH_CODE_LENGTH } from '../constants/auth';
import { WORK_TYPE_STRING } from '../constants/step';
import { PageContainer } from '../layouts/Container';
import { getRandomString } from '../utilities/random';
import { FooterContext } from '../context/FooterContext';
import { ApplymentBriefContext } from '../context/ApplymentBriefContext';
import { formatDateKorean } from '../utilities/date';
import axios from 'axios';

const AddressContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Chip = styled.div`
  background-color: ${({ theme }) => rgba(theme.buttonWhite.color, 0.1)};
  display: inline-block;
  padding: 0 8px;
  border-radius: 32px;
  width: fit-content;
  height: fit-content;
`;

const BriefContainer = styled.main`
  background-color: white;
  box-shadow: 0 0 16px rgb(0 0 0 / 5%), 0 0 5px rgb(0 0 0 / 5%);
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  padding-bottom: 32px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #f6f6f6;
`;

export default function StepApplymentBrief() {
  const { setActiveNext } = useContext(FooterContext);
  const { applymentBrief } = useContext(ApplymentBriefContext);
  const [isRequested, setIsRequested] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isSendingFailed, setIsSendingFailed] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const authCode = useRef(null);

  const schedule = useMemo(() => {
    const schedule = applymentBrief?.schedule;
    if (!schedule) return {};
    const formattedSchedule = {
      startDate: formatDateKorean(schedule.startDate),
      endDate: formatDateKorean(schedule.endDate),
      visitTime: schedule.visitTime,
      hour: schedule.hour,
    };
    return formattedSchedule;
  }, [applymentBrief?.schedule]);

  useEffect(() => {
    setActiveNext(isAuthorized);
  }, [isAuthorized, setActiveNext]);

  const sendAuthMessage = async (phoneNumber) => {
    authCode.current = getRandomString(PHONE_AUTH_CODE_LENGTH);
    setIsSending(true);
    setIsSendingFailed(false);
    const res = await axios.post('/api/sms', {
      to: phoneNumber,
      content: `인증번호 [${authCode.current}]를 정확히 입력해주세요.`,
    });
    setIsSending(false);
    if (res.data.ok) {
      console.log(`테스트 코드: ${authCode.current}`);
      setIsRequested(true);
    } else {
      authCode.current = null;
      setIsSendingFailed(true);
      setErrorMessage(res.data.reason);
    }
  };

  const verifyCode = (code) => {
    if (authCode.current === code.toUpperCase()) {
      setIsAuthorized(true);
      setIsWrongCode(false);
    } else {
      setIsWrongCode(true);
    }
  };

  return (
    <PageContainer>
      {applymentBrief?.address ? (
        <>
          <BriefContainer>
            <Body1>신청 내역</Body1>
            <Body3>돌봄 유형</Body3>
            <DetailContainer>
              <Body4>{WORK_TYPE_STRING[applymentBrief.workType]}</Body4>
            </DetailContainer>
            <Separator />
            <Body3>돌봄 일정</Body3>
            <DetailContainer>
              <Body4>
                {schedule.startDate} ~ {schedule.endDate}
              </Body4>
              <Body4>{schedule.visitTime !== '24시간' && schedule.visitTime + '부터'}</Body4>
              <Body4>{schedule.hour}</Body4>
            </DetailContainer>
            <Separator />
            <Body3>돌봄 주소</Body3>
            <DetailContainer>
              <Body4>{applymentBrief.address.roadAddress}</Body4>
              <AddressContainer>
                <Chip>
                  <Caption3>지번</Caption3>
                </Chip>
                <Caption2>{applymentBrief.address.jibunAddress}</Caption2>
              </AddressContainer>
              <Body4>{applymentBrief.address.addressDetail}</Body4>
            </DetailContainer>
          </BriefContainer>
          <FormContainer>
            <Form
              onSubmit={sendAuthMessage}
              placeholder="전화번호 숫자만 입력해주세요."
              title={
                isRequested
                  ? isAuthorized
                    ? '인증 완료'
                    : '요청 완료'
                  : isSending
                  ? '요청 중...'
                  : '인증 요청'
              }
              filter={/[0-9]/}
              disabled={isSending || isAuthorized}
              message={
                isRequested && !isAuthorized
                  ? `인증 코드 ${PHONE_AUTH_CODE_LENGTH}자리를 전송했습니다. 아래 입력칸에 작성해주세요.`
                  : isSendingFailed
                  ? `전송에 실패했습니다. ${errorMessage}`
                  : ''
              }
            />
            <Form
              onSubmit={verifyCode}
              placeholder="인증 번호를 입력해주세요."
              title={isAuthorized ? '인증 완료' : '인증 확인'}
              disabled={!isRequested || isAuthorized}
              message={isWrongCode ? '잘못된 코드를 입력했습니다. 다시 한 번 확인해주세요.' : ''}
            />
          </FormContainer>
        </>
      ) : (
        <Body4>신청 내역이 없습니다.</Body4>
      )}
    </PageContainer>
  );
}
