import React from 'react'
import './iconfont'
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
