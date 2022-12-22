import React, { PropsWithChildren } from 'react';
import sc from './scoped-class';
import './layout.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<PropsWithChildren<Props>> = ({ style = {}, className = '', children, ...rest }) => {
  return (
    <section style={style} className={sc('', className)}>
      {children}
    </section>
  );
};

Layout.defaultProps = {};
export default Layout;
