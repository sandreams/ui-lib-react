import React, { ButtonHTMLAttributes } from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import classnames from 'src/helpers/classnames';
import './button.scss';

const scopedClass = scopedClassMaker('sand-btn', '-');
const sc = scopedClass;
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  colorSchema?: string;
  type?: 'outline' | 'fill' | 'ghost' | 'link';
}
const Button: React.FC<React.PropsWithChildren<Props>> = ({ type = 'outline', children, ...restProps }) => {
  return (
    <button type="button" className={classnames(sc(''), sc(type))} {...restProps}>
      {children || '按钮'}
    </button>
  );
};

Button.defaultProps = {
  type: 'outline',
};

export default Button;
