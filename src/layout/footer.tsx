import React, { CSSProperties, PropsWithChildren } from 'react';
import sc from './scoped-class';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<PropsWithChildren<Props>> = ({ style = {}, className = '', children, ...rest }) => {
  return (
    <footer style={style} className={sc('footer', className)}>
      footer
    </footer>
  );
};

export default Footer;
