import styled, { css } from 'styled-components';
import { ReactComponent as Search } from '../assets/search_icon.svg';

const SearchInput = ({ readOnly, placeholder, value = '', onChange }) => {
  return (
    <InputBox readOnly>
      <Search style={{ cursor: 'pointer' }} onClick={() => !readOnly} />
      {readOnly ? (
        <Text isExist={value}>{value || placeholder}</Text>
      ) : (
        <Input placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </InputBox>
  );
};

export default SearchInput;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  > svg + * {
    border: none;
    margin-left: 0.6rem !important;
    flex: 1;
    outline: none;
    font-size: 14px;
    padding: 1px 2px;
    line-height: 16px;
  }

  ${({ theme, readOnly }) => css`
    ${theme.inputBorder}
    cursor: ${readOnly && 'pointer'};
    &:focus-within {
      border-color: ${theme.mainColor};
    }
  `}
`;

const Input = styled.input``;

const Text = styled.p`
  margin: 0;
  color: ${(props) => !props.isExist && '#B6B3B3'};
`;
