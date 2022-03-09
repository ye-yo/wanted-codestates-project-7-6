import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    color: #ffffff;
    background-color: #ff8450;
    border-color: transparent;
  `,
  outline: css`
    color: #7d7878;
    border-color: #e2e2e2;
  `,
  flat: css`
    color: #7d7878;
    border-color: transparent;
  `,
};

const DefaultButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background-color: transparent;
  ${({ variant }) => variants[variant]};
`;

export default function Button({ variant = 'primary', ...props }) {
  return <DefaultButton variant={variant} {...props} />;
}
