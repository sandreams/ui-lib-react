import React, { SVGAttributes } from 'react';
import classnames from 'src/helpers/classnames';
import './iconfont.js';
import './icon.scss';
// 导入 目录下所有svg 的方式
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
//   requireContext.keys().forEach(requireContext)
// try {
//   importAll(require.context('src/icons', true, /\.svg$/))
// } catch (error) {
//   console.log(error)
// }
enum IconName {
  tag = 'tag',
  outlineCircle = 'icon-checkbox-blank-circle-outline',
  checkedCircle = 'icon-check-circle',
  tubiao = 'icon-tubiao',
  check = 'icon-check',
  arrowRight = 'icon-arrow-right',
  arrowLeft = 'icon-arrow-left',
  editor = 'icon-editor',
  plus = 'icon-plus',
  search = 'icon-search',
  setting = 'icon-setting',
  charts = 'icon-chart',
  money = 'icon-money',
}
interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name, className, ...restProps } = props;
  return (
    <svg className={classnames('fui-icon', className)} {...restProps}>
      <use xlinkHref={'#' + (name.startsWith('icon-') ? name : 'icon-' + name)} />
    </svg>
  );
};
export { IconName, IconProps };
export default Icon;
