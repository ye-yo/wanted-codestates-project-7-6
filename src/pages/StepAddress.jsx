import { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import AddressModal from '../components/AddressModal/AddressModal';
import { AddressContext } from '../context/AddressContext';
import { FooterContext } from '../context/FooterContext';
import { ApplymentBriefContext } from '../context/ApplymentBriefContext';

export default function StepAddress() {
  const { setActiveNext } = useContext(FooterContext);
  const { applymentBrief, setApplymentBrief } = useContext(ApplymentBriefContext);
  const { jusoData } = useContext(AddressContext);
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState(applymentBrief?.address?.addressDetail || '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useMemo(() => setAddress(jusoData?.roadAddress), [jusoData?.roadAddress]);

  const openSearchModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  useEffect(() => {
    if (addressDetail.trim() && address) {
      jusoData.addressDetail = addressDetail;
      setActiveNext(true);
      setApplymentBrief((data) => ({
        ...data,
        address: jusoData,
      }));
    } else {
      setActiveNext(false);
    }
  }, [address, addressDetail, jusoData, setActiveNext, setApplymentBrief]);

  return (
    <>
      {isModalOpen && <AddressModal setIsModalOpen={setIsModalOpen} />}
      <SearchWrap>
        <SearchBox
          readOnly
          handleBoxClick={openSearchModal}
          value={address}
          placeholder="주소 또는 건물명으로 검색"
        />
        {address && <ButtonResearch onClick={openSearchModal}>재검색</ButtonResearch>}
      </SearchWrap>
      <BorderBox
        value={addressDetail}
        onChange={({ target: { value } }) => setAddressDetail(value)}
        placeholder="상세 주소를 입력해주세요"
      />
    </>
  );
}

const BorderBox = styled.input`
  margin-top: 0.6rem;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  ${({ theme }) => theme.inputBorder}
`;

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  padding-top: 32px;
  display: flex;
  > div {
    flex: 1;
  }
`;

const ButtonResearch = styled.button`
  ${({ theme }) => theme.buttonMain}
  width: 18.6%;
  margin-left: 8px;
  font-size: 1.12rem;
  font-weight: 500;
`;
