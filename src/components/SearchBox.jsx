import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Search } from '../assets/search_icon.svg';

const SearchInput = ({ readOnly, handleBoxClick, placeholder, value = '', setValue, search }) => {
  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleSearch = useCallback(
    (keyword) => {
      if (keyword.replace(/\s/gi, '') !== '') {
        search(keyword.trim());
      }
    },
    [search]
  );

  const handleClick = useCallback(() => {
    handleSearch(value);
  }, [value, handleSearch]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.which === 13) {
        handleSearch(e.target.value);
      }
    },
    [handleSearch]
  );

  return (
    <InputBox readOnly onClick={() => readOnly && handleBoxClick()}>
      <Search style={{ cursor: 'pointer' }} onClick={() => !readOnly && handleClick()} />
      {readOnly ? (
        <Text isExist={value}>{value || placeholder}</Text>
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></Input>
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
    line-height: 16px;
    padding: 1px 2px;
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
