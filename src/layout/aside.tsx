import React, { CSSProperties, PropsWithChildren } from 'react';
import sc from './scoped-class';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FC<PropsWithChildren<Props>> = ({ style = {}, className = '', children, ...rest }) => {
  return (
    <aside style={style} className={sc('aside', className)}>
      aside
    </aside>
  );
};

export default Aside;
