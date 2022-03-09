export const formatDateDash = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
};

export const formatDateKorean = (date) => {
  const dashedDate = formatDateDash(date);
  const splitedDate = dashedDate.split('-');
  return `${splitedDate[0]}년 ${splitedDate[1]}월 ${splitedDate[2]}일`;
};

export const formatTime = (timeString) => {
  const meridiem = timeString.substring(0, 2);
  let time = timeString.substring(3, timeString.length - 1);
  if (meridiem === '오후') {
    time = time === '12' ? '00' : 12 + +time;
  } else if (time.length < 2) {
    time = '0' + time;
  }
  return `${time}:00:00`;
};
