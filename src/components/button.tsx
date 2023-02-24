import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <StyledButton ref={ref} type="button" {...props} />;
});

const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: #418bca;
  padding: 7px 14px;
  font-weight: 500;
  color: #fff;
  background: #418bca;
  border: 0 none;
  transition: background-color 0.2s;
  border-radius: 4px;

  :hover {
    background: rgba(65, 139, 202, 0.92);
  }

  :active {
    background: rgba(65, 139, 202, 0.68);
  }

  :disabled {
    background-color: #0000001f;
    color: #00000061;
    cursor: default;
  }
`;
