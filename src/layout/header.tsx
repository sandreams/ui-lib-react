import React, { CSSProperties, PropsWithChildren } from 'react';
import sc from './scoped-class';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<PropsWithChildren<Props>> = ({ style = {}, className = '', children, ...rest }) => {
  return (
    <header style={style} className={sc('header', className)}>
      header
    </header>
  );
};

export default Header;
