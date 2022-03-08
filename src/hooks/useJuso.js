// import { useMemo, useState } from 'react';

export const useJuso = async (keyword) => {
  // const [data, setData] = useState();
  // useMemo(() => first, [second]);
  try {
    const response = await jusoAPI(keyword);
    const data = await response.json();
    console.log(data.results.juso);
    return data.results.juso;
  } catch (err) {
    console.log(err);
  }
};

const jusoAPI = (keyword) => {
  const params = {
    keyword,
    confmKey: process.env.REACT_APP_JUSO_API,
    resultType: 'json',
    countPerPage: 50,
    currentPage: 1,
  };

  const url = new URL('https://www.juso.go.kr/addrlink/addrLinkApi.do');
  url.search = new URLSearchParams(params).toString();

  return fetch(url);
};
