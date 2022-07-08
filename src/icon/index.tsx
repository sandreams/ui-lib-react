import React, { SVGAttributes } from 'react';
import classnames from 'src/helpers/classnames';
import './importIcons.js';
import './icon.scss';
// 导入 目录下所有svg 的方式
enum IconName {
  tag = 'tag',
  outlineCircle = 'checkbox-blank-circle-outline',
  checkedCircle = 'check-circle',
  tubiao = 'tubiao',
  check = 'check',
  arrowRight = 'arrow-right',
  arrowLeft = 'arrow-left',
  editor = 'editor',
  plus = 'plus',
  search = 'search',
  setting = 'setting',
  charts = 'chart',
  money = 'money',
}
interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {
  return (
    <svg className={classnames('fui-icon', className)} {...restProps}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
};
export { IconName, IconProps };
export default Icon;
