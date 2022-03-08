import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import SearchBox from '../SearchBox';
import { FIRST_EXPLANATION, BOTTOM_EXPLANATION } from '../../constants/addressPopup';
import AddressContent from './AddressContent';
import getJusoAPI from '../../api/getJusoAPI';

function AddressPopup() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleAddressOnchange = (e) => {
    setKeyword(e.target.value);
    getJusoAPI(e.target.value).then((res) => {
      if (res !== null) {
        setData(res);
      }
    });
  };

  return (
    <SearchPopup>
      <Header title="주소검색" close />
      <SearchBox
        placeholder="주소 또는 건물명으로 검색"
        value={keyword}
        onChange={handleAddressOnchange}
      />
      <ResultBox>
        <ContentBox>
          {data.length <= 0 ? (
            <FirstContent>{FIRST_EXPLANATION}</FirstContent>
          ) : (
            data.map(({ roadAddr, jibunAddr, zipNo }) => (
              <AddressContent roadAddress={roadAddr} jibunAddress={jibunAddr} roadCode={zipNo} />
            ))
          )}
        </ContentBox>
      </ResultBox>
      <Bottom.Box>
        <Bottom.Span>{BOTTOM_EXPLANATION}</Bottom.Span>
      </Bottom.Box>
    </SearchPopup>
  );
}

export default AddressPopup;

const SearchPopup = styled.div`
  opacity: 1;
  box-sizing: border-box;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`;

const ResultBox = styled.div`
  display: flex;
  opacity: 1;
  box-sizing: border-box;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
  margin-top: 0px;
  width: calc(100% - 2px);
  min-height: 120px;
  max-height: 440px;
  overflow: hidden scroll;
`;
const ContentBox = styled.div`
  opacity: 1;
  box-sizing: border-box;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`;
const FirstContent = styled.span`
  letter-spacing: 0px;
  white-space: pre-wrap;
  text-align: center;
  color: ${(props) => props.theme.buttonGray.color};
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

const Bottom = {
  Box: styled.div`
    opacity: 1;
    box-sizing: border-box;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-flow: column nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 16px;
    display: block;
  `,
  Span: styled.span`
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: ${(props) => props.theme.buttonGray.color};
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  `,
};
