import React, { CSSProperties, PropsWithChildren } from 'react';
import sc from './scoped-class';
import classnames from '../helpers/classnames';
import './layout.scss';

interface Props {
  style?: CSSProperties;
  classNames?: string;
}

const x: React.FC<PropsWithChildren<Props>> = ({ style = {}, classNames = '', children, ...rest }) => {
  return (
    <section style={style} className={classnames(sc(''), classNames)}>
      {children}
    </section>
  );
};

x.defaultProps = {};
export default x;
