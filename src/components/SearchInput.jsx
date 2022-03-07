import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Search } from '../assets/search.svg';

const SearchInput = ({ handleClickSearchIcon, placeholder, value, setValue, search }) => {
  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleKeyPress = useCallback(
    (e) => {
      if (e.which === 13) {
        handleSearch(e.target.value);
      }
    },
    [search]
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
  }, [value]);

  return (
    <InputBox>
      <Search style={{ cursor: 'pointer' }} onClick={handleClickSearchIcon || handleClick} />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      ></Input>
    </InputBox>
  );
};

export default SearchInput;
const InputBox = styled.div`
  display: flex;
  ${({ theme }) => css`
    ${theme.inputBorder}
    &:focus-within {
      border-color: ${theme.mainColor};
    }
  `}
`;

const Input = styled.input`
  border: none;
  margin-left: 0.6rem;
  flex: 1;
  outline: none;
`;
