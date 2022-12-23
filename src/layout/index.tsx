import React, { PropsWithChildren, ReactElement, ReactFragment } from 'react';
import sc from './scoped-class';
import Aside from './aside';
import './layout.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ style = {}, className = '', children, ...rest }) => {
  let hasAside = false;
  if ((children as Array<ReactElement>).length) {
    (children as Array<ReactElement>).map((node) => {
      if (node.type === Aside) {
        hasAside = true;
      }
      return true;
    });
  }
  return (
    <section style={style} className={sc('', hasAside ? 'has-aside' : null, className)}>
      {children}
    </section>
  );
};

Layout.defaultProps = {};
export default Layout;
