import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DropdownIcon } from '../assets/chevron_down_icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close_icon.svg';

export default function SelectBox({ name, data, selected, setSelected, disabled }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onOpenMenu = () => {
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (disabled) {
      setSelected('24시간');
    } else {
      setSelected();
    }
  }, [disabled, setSelected]);
  return (
    <>
      <Dropdown>
        <label>{name}</label>
        {disabled ? (
          <Dropdown.Button>{selected}</Dropdown.Button>
        ) : (
          <Dropdown.Button onClick={onOpenMenu}>
            <span>{selected ? selected : '선택'}</span>
            <DropdownIcon />
          </Dropdown.Button>
        )}
      </Dropdown>
      <Overlay show={openMenu} onClick={onCloseMenu}>
        <MenuWrapper show={openMenu} onClick={(e) => e.stopPropagation()}>
          <Header>
            <span>{name} 선택</span>
            <CloseIcon onClick={onCloseMenu} />
          </Header>
          <Menu>
            {data.map((el) => (
              <Item
                key={el.id}
                onClick={() => {
                  setSelected(el.text);
                  onCloseMenu();
                }}
              >
                {el.text}
              </Item>
            ))}
          </Menu>
        </MenuWrapper>
      </Overlay>
    </>
  );
}

const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`;

Dropdown.Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-radius: 4px;
  outline: 0;
  height: 48px;
  padding: 0 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.inputGray.backgroundColor};
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 68%;
  background-color: #fff;
  z-index: 30;
  position: absolute;
  bottom: ${({ show }) => (show ? '0' : 'calc(68% * -1)')};
  border-radius: 16px 16px 0 0;
  transition: bottom 0.3s ease-in-out;
`;

const Header = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  line-height: 28px;
  padding: 0 16px;

  svg {
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  overflow-y: auto;
  height: calc(100% - 76px);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  ${({ show }) =>
    show
      ? `position: absolute;
  top: 0;
  left: 0;`
      : 'height: 0;'}
  z-index: 20;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 14px 16px;
  &:hover {
    background-color: ${({ theme }) => theme.inputGray.backgroundColor};
  }
  &:first-child {
    border-radius: 16px 16px 0 0;
  }
`;
