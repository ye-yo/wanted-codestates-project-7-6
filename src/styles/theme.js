const buttonStyle = {
  border:'none',
  borderRadius: '4px',
  fontWeight: 'bold'
}
const theme = {
  mainColor: '#FF8450',
  fontColor: '#5B5555',
  fontGray: '#D3D2D2',
  borderColor: '#EEEEEE',
  inputBorder: {
    //테두리가 있는 input
    border: '#EEEEEE',
    placeholderTextColor: '#B6B3B3',
  },
  inputGray: {
    // 회색 배경 input
    border: 'none',
    backgroundColor: '#F6F6F6',
  },
  buttonMain: {
    //메인 색상 button
    ...buttonStyle,
    border:'none',
    backgroundColor: '#FF8450',
    color: 'white',
  },
  buttonWhite: {
    //흰색 button
    ...buttonStyle,
    border:'none',
    color: '#7D7878',
    backgroundColor: 'white',
  },
  buttonGray: {
    // 회색 button
    ...buttonStyle,
    backgroundColor: '#E2E2E2',
    color: '#B6B3B3',
  },
  headerHeight: '56px',
  footerHeight: '64px',
};

export default theme;
