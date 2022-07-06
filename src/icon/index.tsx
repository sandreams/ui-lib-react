import React from 'react'
import './iconfont.js'
// 导入 目录下所有svg 的方式
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
//   requireContext.keys().forEach(requireContext)
// try {
//   importAll(require.context('src/icons', true, /\.svg$/))
// } catch (error) {
//   console.log(error)
// }
interface IconProps {
  name: string
  iconClass?: string
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className={`fui-icon ${props.iconClass || ''}`}>
      <use
        xlinkHref={
          '#' +
          (props.name.startsWith('icon-') ? props.name : 'icon-' + props.name)
        }
      />
    </svg>
  )
}
export default Icon
