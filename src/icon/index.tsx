import React from 'react';
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
interface IconProps {
  name: string;
  iconClass?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className={`fui-icon ${props.iconClass || ''}`}>
      <use xlinkHref={'#' + (props.name.startsWith('icon-') ? props.name : 'icon-' + props.name)} />
    </svg>
  );
};
export { IconName, IconProps };
export default Icon;
