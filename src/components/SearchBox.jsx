import styled, { css } from 'styled-components';
import { ReactComponent as Search } from '../assets/search.svg';

export default function SearchBox({ handleClickSearchIcon, children }) {
  return (
    <InputBox>
      <Search style={{ cursor: 'pointer' }} onClick={handleClickSearchIcon} />
      {children}
    </InputBox>
  );
}

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
  ${({ theme }) => css`
    ${theme.inputBorder}
    &:focus-within {
      border-color: ${theme.mainColor};
    }
  `}
`;
