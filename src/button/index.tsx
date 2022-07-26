import React from 'react';
import { scopedClassMaker } from 'src/helpers/classes';
import classnames from 'src/helpers/classnames';
import './button.scss';

const scopedClass = scopedClassMaker('sand-ui-button', '-');
const sc = scopedClass;
enum BtnColorSchema {
  normal = 'normal',
}
interface Props {
  colorSchema: string;
}
const Button: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const classname = classnames(sc(''));
  return <button>{children || '按钮'}</button>;
};
export default Button;
export { BtnColorSchema };
