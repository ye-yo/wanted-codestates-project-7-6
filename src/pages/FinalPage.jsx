import styled from 'styled-components';
import Button from '../components/Button';
import { Body4 } from '../components/Text';
import { PageContainer } from '../layouts/Container';

const FinishButton = styled(Button)`
  width: fit-content;
  align-self: center;
`;

export default function FinalPage() {
  return (
    <PageContainer>
      <Body4>
        신청하신 내용을 보고 케어코디님들이 지원할 예정입니다. 케어코디님들이 신청할 때 마다 앱이나
        문자로 알림을 보내드립니다. <br />
        케어코디님의 지원 알림을 기다려주세요!
      </Body4>
      <FinishButton variant="outline">끝내기</FinishButton>
    </PageContainer>
  );
}
