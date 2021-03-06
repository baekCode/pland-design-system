import React, {ReactNode} from 'react';
import {Container} from './index.style'

export type ButtonPropsType = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  kind?: 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
    children,
    icon,
    size,
    kind,
    ...props
  }: ButtonPropsType) => {
  return (
    <Container
      className={kind === 'contained' ? 'btn-kind-default' : 'btn-kind-outlined'}
      size={size}
      {...props}
    >
      {icon}
      {children}
    </Container>
  );
}

export default Button;

Button.defaultProps = {
  size: 'full',
  kind: 'contained'
}
