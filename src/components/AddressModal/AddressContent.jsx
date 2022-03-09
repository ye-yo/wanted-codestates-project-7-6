import React, { useContext } from 'react';
import styled from 'styled-components';
import { AddressContext } from '../../context/AddressContext';

function AddressContent({ value, setIsModalOpen }) {
  const { setJusoData } = useContext(AddressContext);

  const clickData = () => {
    setIsModalOpen(false);
    const { roadAddr, jibunAddr, liNm, zipNo, rnMgtSn, emdNm, siNm, sggNm } = value;
    setJusoData({
      roadAddress: roadAddr,
      jibunAddress: jibunAddr,
      liName: liNm,
      roadCode: zipNo,
      locationCode: rnMgtSn,
      myundongName: emdNm,
      sidoName: siNm,
      sigunguName: sggNm,
    });
  };

  return (
    <Content onClick={clickData}>
      <Left.Content>
        <Left.Top>{value.roadAddr}</Left.Top>
        <Left.Bottom>
          <Left.BottomLeft>
            <Left.Jibun>지번</Left.Jibun>
          </Left.BottomLeft>
          <Left.BottomRight>{value.jibunAddr}</Left.BottomRight>
        </Left.Bottom>
      </Left.Content>
      <Right.Content>
        <Right.RoadCode>{value.zipNo}</Right.RoadCode>
      </Right.Content>
    </Content>
  );
}

export default AddressContent;

const Content = styled.div`
  display: flex;
  opacity: 1;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  padding: 16px;
  border-bottom: 1px solid rgb(246, 246, 246);
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Left = {
  Content: styled.div`
    display: flex;
    opacity: 1;
    box-sizing: border-box;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-flow: column nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: calc(100% - 50px);
  `,
  Top: styled.span`
    display: inline-block;
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: rgb(91, 85, 85);
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `,
  Bottom: styled.div`
    display: flex;
    opacity: 1;
    box-sizing: border-box;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-top: 8px;
  `,
  BottomLeft: styled.div`
    display: flex;
    opacity: 1;
    box-sizing: border-box;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-flow: column nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background-color: rgb(246, 246, 246);
    padding: 4px 8px;
    margin-right: 8px;
    border-radius: 16px;
    width: 35px;
    height: 22px;
  `,
  Jibun: styled.span`
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: rgb(182, 179, 179);
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
  `,
  BottomRight: styled.span`
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: rgb(91, 85, 85);
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  `,
};

const Right = {
  Content: styled.div`
    display: flex;
    opacity: 1;
    box-sizing: border-box;
    align-items: stretch;
    flex-flow: column nowrap;
    justify-content: flex-start;
    margin-left: 8px;
    width: 50px;
  `,
  RoadCode: styled.span`
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: rgb(91, 85, 85);
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `,
};
