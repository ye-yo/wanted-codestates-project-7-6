async function getJusoAPI(keyword) {
  const params = {
    keyword: keyword,
    confmKey: process.env.REACT_APP_JUSO_API,
    resultType: 'json',
    countPerPage: 50,
    currentPage: 1,
  };
  const url = new URL('https://www.juso.go.kr/addrlink/addrLinkApi.do');
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url);
  const data = await response.json();
  const result = await data.results.juso;

  return result;
}

export default getJusoAPI;
